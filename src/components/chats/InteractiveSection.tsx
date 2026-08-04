import { XIcon } from 'lucide-react';
import { useContext, useEffect, useState } from 'react';
import { GithubEventsContext } from '../../context/githubEvent';
import { GithubReposContext } from '../../context/githubRepos';
import { cn } from '../../lib/utils';
import { SERVER_DATA_KEYS } from '../../type';
import { getHeading } from '../../utils/utility';
import RenderData from './RenderData';
import ProjectCard from './ProjectCard';
import EventCard from './EventCard';

const tabs: { key: SERVER_DATA_KEYS; label: string }[] = [
  {
    key: SERVER_DATA_KEYS.GITHUB_REPOS,
    label: "Projects",
  },
  {
    key: SERVER_DATA_KEYS.GITHUB_EVENTS,
    label: "Events"
  }
]

interface Props {
  handleCloseSection: (e: React.MouseEvent) => void;
  interactiveTab: SERVER_DATA_KEYS
}
const InteractiveSection: React.FC<Props> = ({handleCloseSection, interactiveTab}) => {
  const {repos} = useContext(GithubReposContext)!;
  const {events} = useContext(GithubEventsContext)!;
  const [selectedTab, setSelectedTab] = useState(interactiveTab);

  useEffect(() => {
    setSelectedTab(interactiveTab);
  }, [interactiveTab])
  
  return (
    <div className="h-full w-full overflow-hidden glass-card border border-white/10 rounded-2xl flex flex-col">
      <div className='flex justify-between items-center p-5 border-b border-white/5'>
        <h2 className="text-base font-semibold text-white">
          {getHeading(selectedTab)}
        </h2>
        <button
          onClick={handleCloseSection}
          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
        >
          <XIcon className='w-4 h-4' />
        </button>
      </div>
      <div className='flex gap-2 px-5 pt-4'>
        {tabs.map((tab) => (
          <button
            onClick={() => setSelectedTab(tab.key)}
            key={tab.key}
            className={cn('px-4 py-1.5 text-sm rounded-full border border-transparent transition-all duration-150 text-gray-400 hover:text-white',
              selectedTab === tab.key && 'bg-blue-500/10 border-blue-500/20 text-blue-300'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-2 w-full flex-1 min-h-0 overflow-y-auto space-y-4 py-2 px-5">
        {(()=>{
          switch(selectedTab){
            case SERVER_DATA_KEYS.GITHUB_REPOS:
              return <RenderData data={repos} emtpyText="No projects found" Component={ProjectCard} />
            case SERVER_DATA_KEYS.GITHUB_EVENTS:
              return <RenderData data={events} emtpyText="No events found" Component={EventCard} />
            default:
              return <p>No data</p>
          }
        })()}
      </div>
    </div>
  );
};

export default InteractiveSection;
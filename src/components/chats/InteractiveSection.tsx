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
    <div className="h-full w-full overflow-hidden bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 shadow-md shadow-blue-900/40 rounded-lg">
      <div className='flex justify-between items-center p-2'>
        <h2 className="text-xl font-semibold">
          {getHeading(selectedTab)}
        </h2>
        <XIcon onClick={handleCloseSection} className='w-6 h-6 cursor-pointer'/>
      </div>
      <div className='flex gap-2 px-3 mt-1'>
        {tabs.map((tab) => (
          <button
            onClick={() => setSelectedTab(tab.key)}
            key={tab.key}
            className={cn('px-3 py-[6px] hover:bg-slate-900 transition-all duration-150 rounded text-gray-300',
              selectedTab === tab.key && 'bg-slate-900 text-slate-100'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-2 w-full h-[calc(100%-100px)] overflow-y-auto space-y-4 py-2 px-5">
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
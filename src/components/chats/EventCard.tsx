import { GitFork, Github, Lock, Star, Unlock } from "lucide-react";
import React, { memo } from "react";
import { GithubEvent } from "../../type";

const RepoStatsCard: React.FC<{ item: GithubEvent }> = ({ item }) => {
  console.log(item.repo, " ", item.isPrivate);
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 p-6 w-full max-w-5xl bg-gray-900 text-gray-200 shadow-lg rounded-xl hover:shadow-xl transition-shadow duration-300">
      <div className="flex-grow">
        <h2 className="text-2xl font-bold text-gray-100 flex items-center gap-2">
          {item.isPrivate ? (
            <Lock className="text-gray-400" size={20} />
          ) : (
            <Unlock className="text-green-400" size={20} />
          )}
          {item.repo}
        </h2>

        <div className="mt-2">
          <p className="text-gray-400 font-medium">Recent Commits:</p>
          <ul className="list-disc pl-5 text-gray-400">
            {item.commits.length > 0 ? (
              item.commits.map((commit, index) => (
                <li key={index}>{commit}</li>
              ))
            ) : (
              <li>No recent commits</li>
            )}
          </ul>
        </div>

        <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
          <span className="flex items-center gap-2">
            <GitFork size={16} className="text-blue-400" /> {item.forks} Forks
          </span>
          <span className="flex items-center gap-2">
            <Star size={16} className="text-yellow-400" /> {item.stars} Stars
          </span>
        </div>
      </div>

      {!item.isPrivate && (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 font-medium hover:underline flex items-center gap-2 self-center"
        >
          <Github size={20} /> View
        </a>
      )}
    </div>
  );
};

export default memo(RepoStatsCard);
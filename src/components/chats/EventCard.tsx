import { GitFork, Github, Lock, Star, Unlock } from "lucide-react";
import React, { memo } from "react";
import { GithubEvent } from "../../type";

const RepoStatsCard: React.FC<{ item: GithubEvent }> = ({ item }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 p-6 w-full max-w-5xl glass-card border border-white/5 rounded-2xl">
      <div className="flex-grow">
        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
          {item.isPrivate ? (
            <Lock className="text-gray-500" size={16} />
          ) : (
            <Unlock className="text-green-400" size={16} />
          )}
          {item.repo}
        </h2>

        <div className="mt-2">
          <p className="text-sm text-gray-500">Recent commits:</p>
          <ul className="list-disc pl-5 text-sm text-gray-400">
            {item.commits.length > 0 ? (
              item.commits.map((commit, index) => (
                <li key={index}>{commit}</li>
              ))
            ) : (
              <li>No recent commits</li>
            )}
          </ul>
        </div>

        <div className="flex items-center gap-4 mt-4 text-xs text-gray-500">
          <span className="flex items-center gap-2">
            <GitFork size={14} className="text-blue-400" /> {item.forks} Forks
          </span>
          <span className="flex items-center gap-2">
            <Star size={14} className="text-yellow-400" /> {item.stars} Stars
          </span>
        </div>
      </div>

      {!item.isPrivate && (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-400 font-medium hover:underline flex items-center gap-2 self-center shrink-0"
        >
          <Github size={16} /> View
        </a>
      )}
    </div>
  );
};

export default memo(RepoStatsCard);
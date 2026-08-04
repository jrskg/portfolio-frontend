import { Calendar, Code, FileCode, Github, Lock, Unlock } from "lucide-react";
import React, { memo } from "react";
import { Repository } from "../../type";

const ProjectCard: React.FC<{ item: Repository }> = ({ item }) => {
  return (
    <div className="flex md:items-center flex-col md:flex-row gap-4 p-6 w-full max-w-5xl glass-card border border-white/5 rounded-2xl">
      <div className="flex-grow">
        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
          {item.private ? (
            <Lock className="text-gray-500" size={16} />
          ) : (
            <Unlock className="text-green-400" size={16} />
          )}
          {item.name}
        </h2>

        <p className="text-sm text-gray-400 mt-2">
          {item.description || "No description available."}
        </p>

        <div className="flex md:items-center gap-4 mt-4 text-xs text-gray-500 flex-col md:flex-row">
          {item.language && (
            <span className="flex items-center gap-2">
              <FileCode size={14} className="text-blue-400" /> {item.language}
            </span>
          )}

          <span className="flex items-center gap-2">
            <Calendar size={14} className="text-purple-400" /> {item.createdAt}
          </span>

          {item.lastCommitDate && (
            <span className="flex items-center gap-2">
              <Code size={14} className="text-yellow-400" /> {item.lastCommitMessage || "No commit message"}
            </span>
          )}
        </div>
      </div>

      {!item.private && (
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

export default memo(ProjectCard);

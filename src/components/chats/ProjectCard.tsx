import { Calendar, Code, FileCode, Github, Lock, Unlock } from "lucide-react";
import React, { memo } from "react";
import { Repository } from "../../type";

const ProjectCard: React.FC<{ item: Repository }> = ({ item }) => {
  console.log("Rendering RepositoryCard");
  return (
    <div className="flex md:items-center flex-col md:flex-row gap-4 p-6 w-full max-w-5xl bg-gray-900 text-gray-200 shadow-lg rounded-xl hover:shadow-xl transition-shadow duration-300">
      <div className="flex-grow">
        <h2 className="text-2xl font-bold text-gray-100 flex items-center gap-2">
          {item.private ? (
            <Lock className="text-gray-400" size={20} />
          ) : (
            <Unlock className="text-green-400" size={20} />
          )}
          {item.name}
        </h2>

        <p className="text-gray-400 mt-2 text-justify">
          {item.description || "No description available."}
        </p>

        <div className="flex md:items-center gap-4 mt-4 text-sm text-gray-400 flex-col md:flex-row">
          {item.language && (
            <span className="flex items-center gap-2">
              <FileCode size={16} className="text-blue-400" /> {item.language}
            </span>
          )}

          <span className="flex items-center gap-2">
            <Calendar size={16} className="text-purple-400" /> {item.createdAt}
          </span>

          {item.lastCommitDate && (
            <span className="flex items-center gap-2">
              <Code size={16} className="text-yellow-400" /> {item.lastCommitMessage || "No commit message"}
            </span>
          )}
        </div>
      </div>

      {!item.private && (
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

export default memo(ProjectCard);

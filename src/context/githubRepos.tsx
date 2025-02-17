import React, { createContext, useState } from "react";
import { Repository } from "../type";

interface GithubReposContextType {
  repos: Repository[],
  setRepos: (repos: Repository[]) => void
}

export const GithubReposContext = createContext<GithubReposContextType | null>(null);

export const GithubReposProvider:React.FC<{children: React.ReactNode}> = ({children}) => {
  const [repos, setRepos] = useState<Repository[]>([]);
  return (
    <GithubReposContext.Provider value={{repos, setRepos}}>
      {children}
    </GithubReposContext.Provider>
  )
}

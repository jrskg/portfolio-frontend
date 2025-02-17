import React, { createContext, useState } from "react";
import { GithubEvent } from "../type";

interface GithubEventContextType {
  events: GithubEvent[],
  setEvents: (repos: GithubEvent[]) => void
}

export const GithubEventsContext = createContext<GithubEventContextType | null>(null);

export const GithubEventsProvider:React.FC<{children: React.ReactNode}> = ({children}) => {
  const [events, setEvents] = useState<GithubEvent[]>([]);
  return (
    <GithubEventsContext.Provider value={{events, setEvents}}>
      {children}
    </GithubEventsContext.Provider>
  )
}

export enum SERVER_DATA_KEYS {
  GITHUB_REPOS = "GITHUB_REPOS",
  GITHUB_EVENTS = "GITHUB_EVENTS"
};

export interface Repository {
  createdAt: string;
  description: string | null;
  language: string | null;
  lastCommitDate: string | null;
  lastCommitMessage: string | null;
  lastUpdated: string;
  name: string;
  private: boolean;
  pushedAt: string;
  url: string;
}

export interface GithubEvent{
  commits: string[];
  forks: number;
  repo: string;
  stars: number;
  url: string;
  isPrivate: boolean;
}

export type AIResponse =
  | {
    message: string;
  }
  | {
    message: string;
    dataFrom: SERVER_DATA_KEYS.GITHUB_REPOS;
    data: Repository[];
  }
  | {
    message: string;
    dataFrom: SERVER_DATA_KEYS.GITHUB_EVENTS;
    data: GithubEvent[];
  };


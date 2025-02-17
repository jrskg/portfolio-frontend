import { SERVER_DATA_KEYS } from "../type";

export const getHeading = (tab: SERVER_DATA_KEYS | null): string => {
  switch (tab) {
    case SERVER_DATA_KEYS.GITHUB_REPOS:
      return "My Projects";
    case SERVER_DATA_KEYS.GITHUB_EVENTS:
      return "My Events";
    default:
      return "";
  }
}
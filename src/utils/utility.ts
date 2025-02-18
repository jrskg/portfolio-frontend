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

const getRandomNumber = (max: number):number => {
  return Math.floor(Math.random() * max);
}

export const getRandomHeading = (): string => {
  const messages = [
    "Who's this awesome human? Name, please!",
    "Name's on the guest list?",
    "Who's peeking at my portfolio?",
    "Hey you, what's your name?",
    "Who's the cool visitor today?",
    "Reveal yourself, mysterious visitor!",
    "What's your name, awesome human?",
    "Hey, you've got the spotlight! Name?",
    "Who's the legend visiting today?",
    "Spotted you! What's your name, friend?"
  ];
  return messages[getRandomNumber(messages.length)];
}

export const getRandomAlert = ():string => {
  const alertMessages = [
    "Oops, you forgot your name! Try again!",
    "Name missing! Can't call you 'Stranger' forever!",
    "Uh-oh! Your name is needed. Please share it with us!",
    "Don't leave us hanging! What's your name?",
    "Hey, you forgot your name. We'll wait!",
    "Who's this mysterious person? Please provide your name!",
    "Is that a secret? Please enter your name!",
    "We need a name to say 'Hello'!",
    "The name field is waiting! Don't leave it empty!"
  ];
  return alertMessages[getRandomNumber(alertMessages.length)];
}
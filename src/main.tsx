import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { MessageProvider } from './context/messages.tsx';
import { GithubReposProvider } from './context/githubRepos.tsx';
import { GithubEventsProvider } from './context/githubEvent.tsx';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MessageProvider>
      <GithubReposProvider>
        <GithubEventsProvider>
          <App />
          <ToastContainer
            theme='light'
          />
        </GithubEventsProvider>
      </GithubReposProvider>
    </MessageProvider>
  </StrictMode>
);

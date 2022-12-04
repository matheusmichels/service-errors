import './App.css';

import { useState } from 'react';
import { AuthService, getErrorMessage, ProjectService } from './api';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const signIn = () => {
    try {
      AuthService.signIn('admin', 'admin');
      console.log('signed in successfully');
    } catch (error) {
      console.warn(getErrorMessage(error));
    }
  };

  const getCurrentUser = () => {
    try {
      const result = AuthService.getCurrentUser();
      console.log('the current user is:', result);
    } catch (error) {
      console.warn(getErrorMessage(error));
    }
  };

  const createProject = async () => {
    try {
      setIsLoading(true);
      const result = await ProjectService.createProject('1');
      console.log('project created successfully:', result);
    } catch (error) {
      console.warn(getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="buttons">
        <button onClick={signIn}>Sign In</button>
        <button onClick={getCurrentUser}>Get Current User</button>
        <button onClick={createProject}>Create Project</button>

        {isLoading && <div className="loader" />}
      </div>
    </div>
  );
}

export default App;

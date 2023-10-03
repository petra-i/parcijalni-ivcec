import React, { useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import UserInfo from './components/UserInfo';
import RepositoryList from './components/RepositoryList';

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [showInputView, setShowInputView] = useState(true);

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUserData(data);
      setShowInputView(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setUserData(null);
    }
  };

  const handleReturnToInputView = () => {
    setShowInputView(true);
  };

  return (
    <div className="App">
      {showInputView ? (
        <UserForm username={username} onInputChange={handleInputChange} onSubmit={fetchData} />
      ) : (
        <div>
          <UserInfo userData={userData} />
          <RepositoryList reposUrl={userData.repos_url} onReturn={handleReturnToInputView} />
        </div>
      )}
    </div>
  );
}

export default App;

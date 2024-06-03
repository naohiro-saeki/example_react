import React from 'react';
import ChatWindow from './components/ChatWindow';
import GlobalStyle from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ChatWindow />
    </>
  );
};

export default App;

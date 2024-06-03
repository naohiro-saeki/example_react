import React, { useState } from 'react';
import styled from 'styled-components';
import Message from './Message';
import InputBox from './InputBox';

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
`;

const MessagesContainer = styled.div`
  flex: 1;
  padding: 16px;
  overflow-y: auto;
`;

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);

  const handleSendMessage = (message: string) => {
    setMessages([...messages, message]);
  };

  return (
    <ChatContainer>
      <MessagesContainer>
        {messages.map((message, index) => (
          <Message key={index} text={message} />
        ))}
      </MessagesContainer>
      <InputBox onSendMessage={handleSendMessage} />
    </ChatContainer>
  );
};

export default ChatWindow;

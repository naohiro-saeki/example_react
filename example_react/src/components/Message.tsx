import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
  margin-bottom: 8px;
  padding: 10px;
  border-radius: 8px;
  background-color: #f1f1f1;
  align-self: flex-start;
  max-width: 80%;
`;

const MessageText = styled.span`
  font-size: 14px;
`;

interface MessageProps {
  text: string;
}

const Message: React.FC<MessageProps> = ({ text }) => {
  return (
    <MessageContainer>
      <MessageText>{text}</MessageText>
    </MessageContainer>
  );
};

export default Message;

// src/components/UploadPage.jsx

import React, { useState } from 'react';
import styled from 'styled-components';
// import { FaFileUpload } from 'react-icons/fa';
import EncryptButton from './EncryptButton';

const Container = styled.section`
  background-color: rgba(30, 30, 30, 0.5);
  border: 1px solid transparent;
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 2rem;
`;

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UploadIcon = styled(FaFileUpload)`
  color: var(--neon-blue);
  font-size: 3rem;
`;

const UploadTitle = styled.h3`
  color: var(--neon-blue);
  font-size: 2rem;
  font-weight: bold;
  margin-top: 1rem;
`;

const UploadDescription = styled.p`
  color: #fff;
  font-size: 1rem;
  text-align: center;
  margin-top: 1rem;
`;

const UploadForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

const TextInput = styled.input`
  background-color: #101010;
  border: none;
  border-bottom: 1px solid #fff;
  color: #fff;
  margin: 0.5rem 0;
  padding: 0.5rem;
  width: 100%;
  max-width: 400px;
`;

const SubmitButton = styled.button`
  background-color: var(--neon-blue);
  border: none;
  color: #fff;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--neon-pink);
  }
`;

const UploadPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
    <Container>
      <UploadContainer>
        <UploadIcon />
        <UploadTitle>Upload</UploadTitle>
        <UploadDescription>
          Upload a video of sign language and effortlessly receive a clear, comprehensive text translation of the entire content. Utilizing state-of-the-art machine learning and natural language processing technologies, this tool accurately translates sign language gestures into coherent text.
        </UploadDescription>
        <UploadForm onSubmit={handleSubmit}>
          <TextInput
            type="email"
            placeholder="Your email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextInput
            as="textarea"
            rows="4"
            placeholder="Your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <SubmitButton type="submit">
            <FaFileUpload style={{ marginRight: '0.5rem' }} />
            Upload
          </SubmitButton>
        </UploadForm>
        <EncryptButton />
      </UploadContainer>
    </Container>
  );
};

export default UploadPage;

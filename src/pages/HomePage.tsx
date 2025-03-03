import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Ownership from '../components/Ownership';
import Experience from '../components/Experience';
import Socials from '../components/Socials';
import EmailSignup from '../components/EmailSignup';
import Footer from '../components/Footer';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const HomePage: React.FC = () => {
  return (
    <PageWrapper>
      <Header />
      <Hero />
      <ContentWrapper>
        <Features />
        <Ownership />
        <Experience />
        <Socials />
        <EmailSignup />
      </ContentWrapper>
      <Footer />
    </PageWrapper>
  );
};

export default HomePage;

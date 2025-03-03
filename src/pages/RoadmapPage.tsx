import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Roadmap from '../components/Roadmap';
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

const RoadmapPage: React.FC = () => {
  return (
    <PageWrapper>
      <Header />
      <ContentWrapper>
        <Roadmap />
      </ContentWrapper>
      <Footer />
    </PageWrapper>
  );
};

export default RoadmapPage;

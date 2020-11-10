import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

interface EmptyPageProps {
  title?: string;
}

const EmptyPage: React.FC<EmptyPageProps> = ({ title }) => {
  return (
    <div>
      <Header />
      <div>THis is page for {title}</div>
      <Footer />
    </div>
  );
};

export default EmptyPage;

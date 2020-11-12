import React from 'react';
import { navigate } from 'hookrouter';
import Button from '../../components/Button/Button';
import Heading from '../../components/Heading/Heading';

import img from '../../assets/img/Team_Rocket.png';

import s from './NotFound.module.scss';

interface EmptyPageProps {
  title?: string;
}

const EmptyPage: React.FC<EmptyPageProps> = ({ title }) => {
  return (
    <div className={s.root}>
      <h1 className={s.error}>404</h1>
      <img className={s.img} src={img} />
      <div className={s.headerWrapper}>
        <Heading level="h3" className={s.errorHeader}>
          <span style={{ color: 'white' }}>The rocket team</span> has won this time.
        </Heading>
        <Button onClick={() => navigate('/')} color="yellow">
          Return
        </Button>
      </div>
    </div>
  );
};

export default EmptyPage;

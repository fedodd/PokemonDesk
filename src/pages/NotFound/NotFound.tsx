import React from 'react';
import { navigate } from 'hookrouter';
import Button from '../../components/Button/Button';
import Heading from '../../components/Heading/Heading';

import img from '../../assets/img/Team_Rocket.png';
import { LinkEnum } from '../../routes';

import s from './NotFound.module.scss';

interface EmptyPageProps {
  title?: string;
}

const EmptyPage: React.FC<EmptyPageProps> = ({ title }) => {
  return (
    <div className={s.root}>
      <h1 className={s.error}>404</h1>
      <img className={s.img} src={img} alt="command R" />
      <div className={s.headerWrapper}>
        <Heading level="h3" className={s.errorHeader}>
          <span style={{ color: 'white' }}>The rocket team</span> has won this time.
        </Heading>
        <Button onClick={() => navigate(LinkEnum.HOME)} color="yellow">
          Return
        </Button>
      </div>
    </div>
  );
};

export default EmptyPage;

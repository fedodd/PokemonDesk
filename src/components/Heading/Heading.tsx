import React from 'react';
import s from './Heading.module.scss';

interface HeadingProps {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ children, level, className }) => {
  let textComponent = null;
  switch (level) {
    case 'h1':
      textComponent = <h1 className={`${s.h1} ${className}`}>{children}</h1>;
      break;

    case 'h2':
      textComponent = <h2 className={`${s.h2} ${className}`}>{children}</h2>;
      break;
    case 'h3':
      textComponent = <h3 className={`${s.h3} ${className}`}>{children}</h3>;
      break;
    case 'h4':
      textComponent = <h4 className={`${s.h4} ${className}`}>{children}</h4>;
      break;
    case 'h5':
      textComponent = <h5 className={`${s.h5} ${className}`}>{children}</h5>;
      break;
    case 'h6':
      textComponent = <h6 className={`${s.h6} ${className}`}>{children}</h6>;
      break;
    case 'p':
      textComponent = <p className={`${s.p} ${className}`}>{children}</p>;
      break;
    default:
      textComponent = null;
  }

  return textComponent;
};

export default Heading;

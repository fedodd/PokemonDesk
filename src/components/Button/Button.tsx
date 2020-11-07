import React from 'react';

import style from './Button.module.scss';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className={style.root} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

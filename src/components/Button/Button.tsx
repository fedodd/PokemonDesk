import React from 'react';

import cn from 'classnames';
import s from './Button.module.scss';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?: 'small' | 'big';
  fullwidth?: boolean;
  color?: 'yellow' | 'green';
}

// const cx = cn.bind(s);

const Button: React.FC<ButtonProps> = ({ children, onClick, size, fullwidth, color }) => {
  const btnClass = cn({
    [s.root]: true,
    [s.fullwidth]: fullwidth,
    [s.yellow]: color === 'yellow',
    [s.small]: size === 'small',
  });
  // className={cn(s.root, { [s.otherClass]: isOtherClass })}

  return (
    <button className={btnClass} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

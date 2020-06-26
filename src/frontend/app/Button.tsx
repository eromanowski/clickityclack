import * as React from 'react';

interface ButtonProps {
  label: string;
  touchStart(): void;
  touchStop(): void;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <div id="button" className="card" onTouchStart={props.touchStart} onTouchEnd={props.touchStop}>
      <a className="butt">{props.label || "LABEL"}</a>
    </div>
  );
};
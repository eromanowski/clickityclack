import * as React from 'react';
import { useState } from 'react';

interface ButtonProps {
  label: string;
  turnOn(): void;
  turnOff(): void;
}

export const Switch: React.FC<ButtonProps> = (props: ButtonProps) => {
  const [isChecked, setIsChecked] = useState(false);
  
  return (
    <div className="card">
        <label className="rocker rocker-small">
            <input type="checkbox"
              onChange={(event) => {setIsChecked(event.currentTarget.checked); isChecked ? props.turnOff() : props.turnOn() }}
              checked={isChecked}
            />
            <span className="switch-left">On</span>
            <span className="switch-right">Off</span>
            <span className="label">{props.label || "LABEL"}</span>
        </label>
    </div>
  );
};
import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import { Button } from './Button';
import { Switch } from './Switch';

export const App: React.FC<RouteComponentProps> = () => {
  let buttons = [];

  const test = () => {
    fetch('/api/test');
  }

  const turnOn = (relayNum: number) => {
    fetch('/api/turnOn', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json' 
      },
      body: JSON.stringify({relayNum}),
    });
  }

  const turnOff = (relayNum: number) => {
    fetch('/api/turnOff', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json' 
      },
      body: JSON.stringify({relayNum}),
    });
  }

  buttons.push(<Button label="START" touchStart={() => turnOn(1)} touchStop={() => turnOff(1) } />)
  
  for(let i=2; i<=16; i++) {
    buttons.push(<Switch label={"Button " + i} turnOn={() => turnOn(i)} turnOff={() => turnOff(i)}></Switch>)
  }

  return (
    <div className="cards">
      { buttons }
      <div className="card" onClick={test} />
    </div>
  );
};
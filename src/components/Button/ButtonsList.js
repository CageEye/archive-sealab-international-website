import React from 'react';
import Button from './index';
import { idMaker } from '../../utils/id-maker';

const gen = idMaker();

const ButtonsList = ({ buttons }) => {
  if (!buttons || buttons.length < 1) {
    return <></>;
  }
  if (!buttons[0].text || !buttons[0].path) {
    return <></>;
  }
  return (
    <div className="buttons-wrap">
      {buttons.map((item, i) => {
        if (i % 2 === 0) {
          return (
            <Button key={gen.next().value} className="is-primary" {...item} />
          );
        }
        return (
          <Button key={gen.next().value} className="is-transparent" {...item} />
        );
      })}
    </div>
  );
};

export default ButtonsList;

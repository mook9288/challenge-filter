import React, { FC } from 'react';
import classNames from 'classnames/bind';
import { STATUS } from '../../constants';

interface Props {
  title: string;
  client: string;
  due: string;
  status: string;
}
const CardContent: FC<Props> = ({ title, client, due, status }) => {
  const statusActive = status === STATUS.ACTIVE;
  return (
    <div className='card__content'>
      <p className={classNames('title', { pr0: !statusActive })}>
        <strong>{title}</strong>
        {statusActive && <span>{STATUS.ACTIVE}</span>}
      </p>
      <span className='client'>{client}</span>
      <span className='data'>{due}</span>
    </div>
  );
};

export default CardContent;

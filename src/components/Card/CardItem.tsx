import React, { FC } from 'react';
import CardContent from './CardContent';
import CardDescription from './CardDescription';
import { RequestType } from '../../type';

interface Props {
  data: RequestType;
}
const CardItem: FC<Props> = ({ data }) => {
  const { title, client, due, count, amount, method, material, status } = data;

  return (
    <div className='card'>
      <CardContent title={title} client={client} due={due} status={status} />
      <CardDescription
        count={count}
        amount={amount}
        method={method}
        material={material}
      />
    </div>
  );
};

export default CardItem;

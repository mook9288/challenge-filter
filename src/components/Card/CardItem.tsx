import React, { FC } from 'react';
import Button from '../../components/atoms/Button';
import CardContent from './CardContent';
import CardDescription from './CardDescription';
import { RequestType } from '../../type';

interface Props {
  data: RequestType;
}
const CardItem: FC<Props> = ({ data }) => {
  console.log('data', data);
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
      <div className='button-area'>
        <Button label='요청 내역 보기' variant='primary' />
        <Button label='채팅하기' variant='secondary' />
      </div>
    </div>
  );
};

export default CardItem;

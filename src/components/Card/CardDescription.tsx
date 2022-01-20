import React, { FC } from 'react';
import Button from '../../components/atoms/Button';

interface Props {
  count?: number;
  amount: number;
  method: string[];
  material: string[];
}
const CardDescription: FC<Props> = ({ count, amount, method, material }) => {
  return (
    <>
      <div className='card__description'>
        <dl className='request-data'>
          <dt className='request-data__title'>도면개수</dt>
          <dd className='request-data__desc'>{count}</dd>
        </dl>
        <dl className='request-data'>
          <dt className='request-data__title'>총 수량</dt>
          <dd className='request-data__desc'>{amount}</dd>
        </dl>
        <dl className='request-data'>
          <dt className='request-data__title'>가공 방식</dt>
          <dd className='request-data__desc'>{method.join(', ')}</dd>
        </dl>
        <dl className='request-data'>
          <dt className='request-data__title'>재료</dt>
          <dd className='request-data__desc'>{material.join(', ')}</dd>
        </dl>
      </div>

      <div className='button-area'>
        <Button label='요청 내역 보기' variant='primary' />
        <Button label='채팅하기' variant='secondary' />
      </div>
    </>
  );
};

export default CardDescription;

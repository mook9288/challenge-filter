import { useState } from 'react';
import Select from '../../components/atoms/Select';
import Checkbox from '../../components/atoms/Checkbox';
import Button from '../../components/atoms/Button';
import CardItem from '../../components/Card/CardItem';
import data from '../../requests.json';
import { RequestType } from '../../type';
import { STATUS } from '../../contant';

const Board = () => {
  const { requests: requestsData } = data;
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);
  };

  const filterRequests = () => {
    if (isChecked) {
      return requestsData.filter((item) => item.status === STATUS.ACTIVE);
    } else {
      return requestsData;
    }
  };

  return (
    <div>
      <div className='header'>
        <h1>dashboard</h1>
      </div>
      <div className='container'>
        <div className='page-title'>
          <h2 className='page-title__tit'>들어온 요청</h2>
          <p className='page-title__desc'>
            파트너님에게 딱 맞는 요청서를 찾아보세요.
          </p>
        </div>
        <div className='search-area'>
          <div className='search-area__left'>
            <Select />
            <Select />
          </div>
          <div className='search-area__right'>
            <Checkbox
              id={'checkbox'}
              checked={isChecked}
              onChange={handleOnChange}
              label={'상담 중인 요청만 보기'}
              toggle={true}
            />
          </div>
        </div>
        <div className='card-wrap'>
          {filterRequests().length > 0 ? (
            filterRequests().map((data) => (
              <CardItem data={data} key={data.id} />
            ))
          ) : (
            <div className='no-data'>조건에 맞는 견젹 요청이 없습니다.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Board;

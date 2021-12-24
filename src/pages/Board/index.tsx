import { useCallback, useState } from 'react';
import Select from '../../components/atoms/Select';
import Checkbox from '../../components/atoms/Checkbox';
import CardItem from '../../components/Card/CardItem';
import data from '../../requests.json';
import { STATUS, SELECT_NAME, methodItem, materialItem } from '../../constants';

const Board = () => {
  const { requests: requestsData } = data;
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isFilterSelected, setIsFilterSelected] = useState<string[]>([]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);
  };

  const handleMethodChange = useCallback(
    (checked, item) => {
      if (checked) {
        setIsFilterSelected([...isFilterSelected, item]);
      } else {
        setIsFilterSelected(isFilterSelected.filter((el) => el !== item));
      }
    },
    [isFilterSelected]
  );

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
            <Select
              title={SELECT_NAME.METHOD}
              name={'method'}
              item={methodItem}
              isFilterSelected={isFilterSelected}
              onMethodChange={handleMethodChange}
            />
            <Select
              title={SELECT_NAME.MATERIAL}
              name={'material'}
              item={materialItem}
              isFilterSelected={isFilterSelected}
              onMethodChange={handleMethodChange}
            />
          </div>
          <div className='search-area__right'>
            <Checkbox
              id={'checkbox'}
              name={'active'}
              checked={isChecked}
              onChange={handleOnChange}
              label={'상담 중인 요청만 보기'}
              toggle={true}
            />
          </div>
        </div>
        <div className='card-wrap'>
          {requestsData.length > 0 ? (
            requestsData.map((data) => {
              if (isChecked && data.status !== STATUS.ACTIVE) return;
              return <CardItem data={data} key={data.id} />;
            })
          ) : (
            <div className='no-data'>조건에 맞는 견젹 요청이 없습니다.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Board;

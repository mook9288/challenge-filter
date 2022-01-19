import { useCallback, useState } from 'react';
import Select from '../../components/atoms/Select';
import Checkbox from '../../components/atoms/Checkbox';
import CardItem from '../../components/Card/CardItem';
import Button from '../../components/atoms/Button';
import data from '../../requests.json';
import { STATUS, SELECT_NAME, methodItem, materialItem } from '../../constants';

const Board = () => {
  const { requests: requestsData } = data;
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isFilterMethod, setIsFilterMethod] = useState<string[]>([]);
  const [isFilterMaterial, setIsFilterMaterial] = useState<string[]>([]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);
  };

  const handleMethodChange = useCallback(
    (checked, item) => {
      if (checked) {
        setIsFilterMethod([...isFilterMethod, item]);
      } else {
        setIsFilterMethod(isFilterMethod.filter((el) => el !== item));
      }
    },
    [isFilterMethod]
  );

  const handleMaterialChange = useCallback(
    (checked, item) => {
      if (checked) {
        setIsFilterMaterial([...isFilterMaterial, item]);
      } else {
        setIsFilterMaterial(isFilterMaterial.filter((el) => el !== item));
      }
    },
    [isFilterMaterial]
  );

  const filterRequests = () => {
    return requestsData.filter(
      (item) =>
        (isFilterMethod.length > 0
          ? isFilterMethod.some((value) => item.method.includes(value))
          : true) &&
        (isFilterMaterial.length > 0
          ? isFilterMaterial.some((value) => item.material.includes(value))
          : true)
    );
  };

  const handleReset = () => {
    setIsFilterMethod([]);
    setIsFilterMaterial([]);
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
              isFilterSelected={isFilterMethod}
              onMethodChange={handleMethodChange}
            />
            <Select
              title={SELECT_NAME.MATERIAL}
              name={'material'}
              item={materialItem}
              isFilterSelected={isFilterMaterial}
              onMethodChange={handleMaterialChange}
            />
            <Button
              label='초기화'
              variant='link'
              icon='reset'
              onClick={handleReset}
              className='btn__reset'
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
          {filterRequests().length > 0 ? (
            filterRequests().map((data) => {
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

import React, { FC, useRef, useState, useCallback } from 'react';
import useClickOutside from '../../helpers/useClickOutside';
import { SelectOptionType } from '../../type';
import Checkbox from './Checkbox';

interface Props {
  title: string;
  name: string;
  item: SelectOptionType[];
}

const Select: FC<Props> = ({ title, name, item }) => {
  const wrapperRef = useRef(null);
  const [open, setOpen] = useState<boolean>(false);
  const [isFilterSelected, setIsFilterSelected] = useState<string[]>([]);

  useClickOutside(
    wrapperRef,
    useCallback(() => {
      setOpen(false);
    }, [])
  );

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

  return (
    <div className='select' ref={wrapperRef}>
      <span className='select__text' onClick={() => setOpen(!open)}>
        {title}
      </span>
      {open && (
        <ul className='select__menu'>
          {item.map((item, index) => (
            <li className='select__menu__item' key={index}>
              <Checkbox
                id={item.id}
                name={name}
                checked={isFilterSelected.includes(item.id) ? true : false}
                onChange={(e) => handleMethodChange(e.target.checked, item.id)}
                label={item.label}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;

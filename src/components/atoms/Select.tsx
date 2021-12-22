import React, { FC, useRef, useState, useCallback } from 'react';
import useClickOutside from '../../helpers/useClickOutside';

interface Props {
  item: string;
}
const Select: FC<Props> = ({ item }) => {
  const wrapperRef = useRef(null);
  const [open, setOpen] = useState(false);

  useClickOutside(
    wrapperRef,
    useCallback(() => {
      setOpen(false);
    }, [])
  );

  return (
    <div className='select' ref={wrapperRef}>
      <span className='select__text' onClick={() => setOpen(!open)}>
        Select
      </span>
      {open && (
        <ul className='select__menu'>
          <li className='select__menu__item'>eee</li>
        </ul>
      )}
    </div>
  );
};

export default Select;

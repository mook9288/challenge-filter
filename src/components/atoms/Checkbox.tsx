import React from 'react';
import classNames from 'classnames/bind';

interface Props {
  id: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string | null;
  toggle?: boolean | null;
}

const Checkbox = ({
  id,
  name,
  checked,
  onChange,
  label = '',
  toggle = false,
}: Props) => {
  return (
    <div
      className={classNames('checkbox', { fitted: label }, { toggle: toggle })}
    >
      <input
        type='checkbox'
        id={id}
        name={name}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;

import React, { useState } from 'react';

interface Props {
  id: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string | null;
  toggle?: boolean | null;
}

const Checkbox = ({
  id,
  checked,
  onChange,
  label = '',
  toggle = false,
}: Props) => {
  return (
    <div
      className={`checkbox ${label ? '' : 'fitted'} ${toggle ? 'toggle' : ''}`}
    >
      <input type='checkbox' id={id} onChange={onChange} checked={checked} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;

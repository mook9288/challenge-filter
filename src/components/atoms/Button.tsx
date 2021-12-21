import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames/bind';

interface Props {
  label?: string;
  size?: size;
  disabled?: boolean;
  link?: boolean;
  variant?: ButtonVariant;
  icon?: boolean | string;
  iconPosition?: string;
  children?: React.ReactNode;
}

export type size = 'basic' | 'tiny' | 'small' | 'medium' | 'large';
export type ButtonVariant = 'default' | 'primary' | 'secondary' | 'link';
export type iconPosition = 'left' | 'right';

const Button: FC<Props> = ({
  label,
  size,
  disabled,
  link,
  variant,
  icon,
  iconPosition,
  children,
}) => {
  const hasNotChildren =
    children === null ||
    children === undefined ||
    (Array.isArray(children) && children.length === 0);

  console.log(hasNotChildren, children);
  return (
    <button className={classNames('btn', size, variant && 'btn__' + variant)}>
      {hasNotChildren && icon && !icon && (
        <i className={classNames('btn__ico', icon)}></i>
      )}
      {!hasNotChildren && children}
      {hasNotChildren && label && <span className='btn__label'>{label}</span>}
    </button>
  );
};

export default Button;

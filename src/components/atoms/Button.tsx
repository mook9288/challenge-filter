import React, { FC } from 'react';
import classNames from 'classnames/bind';

interface Props {
  label?: string;
  size?: size;
  disabled?: boolean;
  link?: boolean;
  variant?: ButtonVariant;
  icon?: boolean | string;
  iconPosition?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
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
  iconPosition = 'left',
  children,
  onClick,
  className,
}) => {
  const hasNotChildren =
    children === null ||
    children === undefined ||
    (Array.isArray(children) && children.length === 0);

  return (
    <button
      className={classNames(
        'btn',
        size,
        variant && 'btn__' + variant,
        className
      )}
      onClick={onClick}
    >
      {hasNotChildren && icon && iconPosition === 'left' && (
        <i className={classNames('btn__ico', `ico__${icon}`)}></i>
      )}
      {!hasNotChildren && children}
      {hasNotChildren && label && <span className='btn__label'>{label}</span>}
      {hasNotChildren && icon && iconPosition === 'right' && (
        <i className={classNames('btn__ico', `ico__${icon}`, 'pos-right')}></i>
      )}
    </button>
  );
};

export default Button;

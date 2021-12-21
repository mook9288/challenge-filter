import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames/bind';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label?: string;
  size?: size;
  disabled?: boolean;
  link?: boolean;
  variant?: ButtonVariant;
  icon?: boolean | string;
  iconPosition?: string;
  children?: React.ReactNode;
}

interface Props {
  label?: string;
  size?: size;
  disabled?: boolean;
  link?: boolean;
  variant?: ButtonVariant;
  icon?: boolean | string;
  iconPosition?: string;
}

export type size = 'basic' | 'tiny' | 'small' | 'medium' | 'large';
export type ButtonVariant = 'default' | 'primary' | 'secondary' | 'link';
export type iconPosition = 'left' | 'right';

const Button: FC<Props> = (props) => {
  const hasNotChildren =
    props.children === null ||
    props.children === undefined ||
    (Array.isArray(props.children) && props.children.length === 0);

  console.log(hasNotChildren, props.children);
  return (
    <button
      className={classNames(
        'btn',
        props.size,
        props.variant && 'btn__' + props.variant
      )}
    >
      {hasNotChildren && props.icon && !props.icon && (
        <i className={classNames('btn__ico', props.icon)}></i>
      )}
      {!hasNotChildren && props.children}
      {hasNotChildren && props.label && (
        <span className='btn__label'>{props.label}</span>
      )}
    </button>
  );
};

export default Button;

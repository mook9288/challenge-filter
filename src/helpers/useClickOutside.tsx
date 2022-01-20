import { RefObject, useEffect } from 'react';

const useClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  cb: (e?: any) => void
) => {
  const checkClickOutside = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      cb();
    }
  };

  useEffect(() => {
    document.addEventListener('click', checkClickOutside);

    return () => {
      document.removeEventListener('click', checkClickOutside);
    };
  });
};

export default useClickOutside;

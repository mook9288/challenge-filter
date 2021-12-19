import { useEffect } from 'react';

const useClickOutside = (ref: any, cb: any) => {
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

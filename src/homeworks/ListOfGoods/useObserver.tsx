import { useEffect, useRef } from 'react';
import { Product } from '../ts1/3_write';

interface IuseObserver {
  ref: React.MutableRefObject<HTMLDivElement>;
  callback: () => void;
  dependArr: Product[];
}

export const useObserver = (
  ref: IuseObserver['ref'],
  canLoad: boolean,
  callback: IuseObserver['callback'],
  dependArr: IuseObserver['dependArr']
) => {
  const observer = useRef(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();
      let cb = (entries: Array<IntersectionObserverEntry>) => {
        if (entries[0].isIntersecting && canLoad) {
          callback();
        }
      };
      observer.current = new IntersectionObserver(cb);
      observer.current.observe(ref.current);
  }, [dependArr]
  );
};

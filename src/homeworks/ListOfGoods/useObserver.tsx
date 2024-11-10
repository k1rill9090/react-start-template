import { useEffect, useRef } from "react";
import { Product } from "../ts1/3_write";

interface IuseObserver {
  ref: React.MutableRefObject<HTMLDivElement>;
  callback: () => void;
  dependArr: Product[];
}

export const useObserver = (ref: IuseObserver["ref"], callback: IuseObserver["callback"], dependArr: IuseObserver["dependArr"]) => {
    const observer = useRef(null);

    useEffect(() => {
        if (observer.current) observer.current.disconnect();
        const cb = (entries: Array<IntersectionObserverEntry>) => {
          if (entries[0].isIntersecting) {
            callback();
          }
        };
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current);
      }, [dependArr]);
}
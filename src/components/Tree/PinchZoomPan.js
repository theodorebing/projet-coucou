import React, { useEffect, useRef } from 'react';
// import classNames from 'classnames';
import { create } from 'pinch-zoom-pan';
import './styles.scss';
// import css from './PinchZoomPan.module.css';
// interface IProps {
//   min?: number;
//   max?: number;
//   captureWheel?: boolean;
//   className?: string;
//   style?: React.CSSProperties;
//   children: React.ReactNode;
// }

const PinchZoomPan = ({ min, max, captureWheel, className, style, children }) => {
  // const root = useRef<HTMLDivElement>(null);
  const root = useRef(null);
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    return create({ element, minZoom: min, maxZoom: max, captureWheel });
  }, [min, max, captureWheel]);
  return (
    <div className='root' ref={root} >
      <div className='point'>
        <div className='canvas'>
          {children}
        </div>
      </div>
    </div>
  );
}



export default PinchZoomPan

/**
 * @author Sky
 *  2020/7/6
 */

import React from 'react';
import { SelfLoadElement } from '../type';

const SelfElementPack: React.FC<SelfLoadElement> = (props) => {

  return (
    <>
      {React.Children.map(props.SelfElement, (item) => React.cloneElement(item as any, {
        value: props.value,
        onChange: props.onChange,
        ...props?.elementOption,
      }))}
    </>
  );
};

export default SelfElementPack;

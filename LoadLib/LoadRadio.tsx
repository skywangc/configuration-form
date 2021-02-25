/**
 * @author Sky
 *  2020/6/22
 */

import React from 'react';
import { LoadElement } from '../type';
import { Radio } from 'antd';

const LoadRadio: React.FC<LoadElement> = (props) => {

  return (
    <>
      <Radio.Group {...props} options={props?.options || []}/>
    </>
  );
};

export default LoadRadio;

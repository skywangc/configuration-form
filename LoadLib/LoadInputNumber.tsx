/**
 * @author Sky
 *  2020/9/26
 */

import React from 'react';
import { InputNumber } from 'antd';
import { InputNumberLoadElement } from '../type';

const LoadInputNumber: React.FC<InputNumberLoadElement> = (props) => {
  const { InputNumberProperty = {}, value, onChange,style } = props;

  return (
    <InputNumber placeholder='请输入' onChange={onChange} value={value} style={style} {...InputNumberProperty} />
  );
};

export default LoadInputNumber;

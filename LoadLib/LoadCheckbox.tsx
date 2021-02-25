/**
 * @author Sky
 *  2020/9/27
 */

import React from 'react';
import { CheckboxLoadElement } from '../type';
import { Checkbox } from 'antd';

interface Props extends CheckboxLoadElement {
  type: 'group' | 'checkbox',
  checked?: boolean,
}

const LoadCheckbox: React.FC<Props> = (props) => {
  const { type, checked, onChange, elementOption, CheckboxProperty, CheckboxGroupProperty } = props;
  const property = {...CheckboxProperty,text:undefined};

  const map = {
    group: <Checkbox.Group {...CheckboxGroupProperty} options={props?.options || []} {...elementOption}/>,
    checkbox: <Checkbox {...property} checked={checked} onChange={onChange} {...elementOption}>{props?.CheckboxProperty?.text}</Checkbox>,
  };

  return map[type];
};

export default LoadCheckbox;

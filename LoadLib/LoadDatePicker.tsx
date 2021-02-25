/**
 * @author Sky
 *  2020/6/29
 */

import React from 'react';
import { DatePicker } from 'antd';
import { DatePickerLoadElement, DatePickerType, extra } from '../type';

const LoadDatePicker: React.FC<DatePickerLoadElement & extra> = (props) => {
  const { DatePickerProperty = {}, value, onChange } = props;
  const { DateType, ...other } = DatePickerProperty as DatePickerType;

  const typeObj = {
    DatePicker: <DatePicker value={value} onChange={onChange} style={props?.style} {...other} />,
  };

  return (
    <>
      {typeObj[DateType || 'DatePicker']}
    </>
  );
};

export default LoadDatePicker;

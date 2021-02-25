/**
 * @author Sky
 *  2020/9/26
 */

import React from 'react';
import { DatePicker } from 'antd';
import { extra, MonthPickerLoadElement } from '../type';

const { MonthPicker } = DatePicker;

const LoadMonthPicker: React.FC<MonthPickerLoadElement & extra> = (props) => {
  const { MonthPickerProperty = {}, value, onChange, style } = props;

  return <MonthPicker onChange={onChange} value={value} style={style} {...MonthPickerProperty} />;
};

export default LoadMonthPicker;

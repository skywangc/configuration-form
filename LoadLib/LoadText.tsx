/**
 * @author Sky
 *  2020/9/26
 */

import React from 'react';
import { Typography } from 'antd';
import { LoadElement } from '../type';

const LoadText: React.FC<LoadElement> = (props) => {

  const { TextProperty: { text, ...TextProps } = {} } = props;

  return (
    <Typography.Text className="ant-form-text" {...TextProps}>
      {text || ''}
    </Typography.Text>
  );
};

export default LoadText;

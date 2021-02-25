/**
 * @author Sky
 *  2020/6/27
 */

import React from 'react';
import { Button } from 'antd';
import { ButtonLoadElement } from '../type';

const LoadButton: React.FC<ButtonLoadElement> = (props) => {

  const { ButtonProperty: { buttonText, ...property } = {} } = props;

  return (
    <>
      <Button onClick={props?.onClick} {...property} >{buttonText}</Button>
    </>
  );
};

export default LoadButton;

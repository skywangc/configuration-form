/**
 * @author Sky
 *  2020/6/27
 */

import React from 'react';
import { Col, Row } from 'antd';
import { ItemCon } from '../type';

const index: React.FC<Pick<ItemCon, 'supplementary'>> = (props) => {

  const extendShow = (
    <Row gutter={6} {...props?.supplementary?.gutter}>
      <Col span={22} {...props?.supplementary?.ItemCol}>
        {props?.children}
      </Col>
      <Col span={2} {...props?.supplementary?.AfterCol} style={{ display: 'flex', alignItems: 'center' }}>
        {props?.supplementary?.content}
      </Col>
    </Row>
  );

  return (
    <>
      {props?.supplementary ? extendShow : props?.children}
    </>
  );
};

export default index;

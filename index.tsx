/**
 * 配置式表单
 * @author Sky
 *  2020/6/19
 */

import React from 'react';
import { Col, Form, Row, Input } from 'antd';
import LoadButton from './LoadLib/LoadButton';
import SelfElementPack from './LoadLib/SelfElementPack';
import LoadText from './LoadLib/LoadText';
import LoadMonthPicker from './LoadLib/LoadMonthPicker';
import LoadInputNumber from './LoadLib/LoadInputNumber';
import LoadCheckbox from './LoadLib/LoadCheckbox';
import { PropsType, ElementType, listConType } from './type.d';
import LoadRadio from './LoadLib/LoadRadio';
import LoadSelect, { LoadCascade } from './LoadLib/LoadSelect';
import LoadUpload from './LoadLib/LoadUpload';
import Added from './Added';
import LoadDatePicker from './LoadLib/LoadDatePicker';
import LoadYearPicker from './LoadLib/LoadYearPicker';

const { Search, TextArea } = Input;

const ColSet = {
  sm: 12,
  xs: 24,
};

const ItemShow: React.FC<ElementType & { value?: any; onChange?: any }> = (props) => {
  const { elementType, elementOption, supplementary, form ,...property} = props;
  const defaultProperty = { elementOption, ...property };
  // 表单对象
  const elementObj = {
    Search: (
      <Search
        placeholder="请填写"
        enterButton={property?.enterButton}
        {...property}
        {...elementOption}
      />
    ),
    Input: <Input placeholder="请填写" {...property} {...elementOption} />,
    TextArea: <TextArea placeholder="请填写" {...property} {...elementOption} />,
    Radio: <LoadRadio {...defaultProperty} />,
    Select: <LoadSelect {...defaultProperty} />,
    Cascade: <LoadCascade {...defaultProperty} />,
    Upload: <LoadUpload {...defaultProperty} />,
    Button: <LoadButton {...defaultProperty} />,
    DatePicker: <LoadDatePicker {...defaultProperty} />,
    Self: <SelfElementPack {...defaultProperty} />,
    Text: <LoadText {...defaultProperty} />,
    MonthPicker: <LoadMonthPicker {...defaultProperty} />,
    YearPicker: <LoadYearPicker {...defaultProperty} />,
    InputNumber: <LoadInputNumber {...defaultProperty} />,
    SelfContent: property.NodeContent,
    CheckboxGroup: <LoadCheckbox type="group" {...defaultProperty} />,
    Checkbox: <LoadCheckbox type="checkbox" {...defaultProperty} />,
  };
  return <Added supplementary={supplementary}>{elementObj[elementType]}</Added>;
};

/**
 * 遍历生成子表单
 * @param props
 * @constructor
 */
export const RenderShow: React.FC<listConType> = (props) => {
  const { listCon, ColCon,form } = props;

  return (
    <>
      {listCon.map((item) => {
        const {
          label,
          name,
          rules,
          formItemLayout,
          formItemCon,
          initialValue,
          ColItemCon,
          ...property
        } = item;
        return (
          <Col key={`${name}`} {...ColSet} {...ColCon} {...ColItemCon}>
            <Form.Item
              label={label}
              name={name}
              rules={rules}
              initialValue={initialValue}
              {...formItemLayout}
              {...formItemCon}
            >
              <ItemShow {...property} form={form}/>
            </Form.Item>
          </Col>
        );
      })}
    </>
  );
};

/**
 * 生成表单
 * @param props
 */
const index: React.FC<PropsType> = (props) => {
  const {
    form,
    listCon,
    formLayout,
    initialValues,
    fromCon,
    ColCon,
    RowCon,
  } = props;

  return (
    <Form
      form={form}
      initialValues={initialValues}
      {...formLayout}
      {...fromCon}
      style={{ marginTop: 10 }}
    >
      <Row {...RowCon}>
        <RenderShow listCon={listCon} ColCon={ColCon} form={form}/>
      </Row>
    </Form>
  );
};

export default index;

/**
 * @author Sky
 *  2020/6/23
 */

import React from 'react';
import { CascadeLoadElement, extra, Options, SelectLoadElement } from '../type';
import { Cascader, Select } from 'antd';
import { SelectProps } from 'rc-select/lib/generate';
import { OptionsType as SelectOptionsType } from 'rc-select/lib/interface';
import { CascaderProps } from 'antd/es/cascader';

const { Option } = Select;

// 默认配置
const defaultCon: SelectProps<SelectOptionsType, any> = {
  allowClear: true,
  showSearch: true,
  optionFilterProp: 'children',
  placeholder: '请选择',
};

// option数组元素为string | number
function setOnlyOption(options: (string | number)[]) {
  return options.map((item) => (
    <Option key={item} value={item}>
      {item}
    </Option>
  ));
}

// option数组元素为object
function setOption(options: Options[], fieldNames?: string[]) {
  return options.map((item) => {
    if (fieldNames)
      return (
        <Option
          call_data={fieldNames[2] === 'call_data' ? item : undefined}
          key={`${item?.[fieldNames[0]]}${item?.[fieldNames[1]]}`}
          value={item?.[fieldNames[0]]}
        >
          {item?.[fieldNames[1]]}
        </Option>
      );
    return (
      <Option key={`${item?.value}${item?.label}`} value={item?.value!}>
        {item?.label}
      </Option>
    );
  });
}

function distinguishType(
  options?: string[] | number[] | Options[] | undefined,
  fieldNames?: string[],
) {
  if (!options || options?.length === 0) {
    return [];
  }
  if (['string', 'number'].includes(typeof options[0])) {
    return setOnlyOption(options as (string | number)[]);
  }
  if (typeof options[0] === 'object') {
    return setOption(options as Options[], fieldNames);
  }
  return [];
}

const LoadSelect: React.FC<SelectLoadElement & extra> = (props) => {
  const { onChange, value, disabled } = props;

  return (
    <>
      <Select
        onChange={onChange}
        disabled={disabled}
        value={value}
        {...defaultCon}
        {...props?.SelectProperty}
        {...props?.elementOption}
      >
        {distinguishType(props?.selectOptions, props?.fieldNames)}
      </Select>
    </>
  );
};

const cascadeDefaultCon: Partial<CascaderProps> = {
  placeholder: '请选择',
  allowClear: true,
  expandTrigger: 'hover',
  showSearch: true,
  changeOnSelect: true,
};

const LoadCascade: React.FC<CascadeLoadElement & extra> = (props) => {
  const { onChange, value } = props;

  return (
    <>
      <Cascader
        onChange={onChange}
        value={value}
        {...cascadeDefaultCon}
        {...props?.CascadeProperty}
        {...props?.elementOption}
        options={props?.cascadeOptions || []}
      />
    </>
  );
};

export { LoadCascade };

export default LoadSelect;

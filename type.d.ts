import { FormInstance } from 'antd/lib/form/util';
import { FormItemProps } from 'antd/lib/form/FormItem';
import { FormProps } from 'antd/lib/form';
import { ColProps } from 'antd/lib/grid/col';
import { RowProps } from 'antd/lib/row';
import { SelectProps } from 'rc-select/lib/generate';
import { OptionsType as SelectOptionsType } from 'rc-select/lib/interface';
import { CascaderProps } from 'antd/lib/cascader';
import React, { FocusEventHandler } from 'react';
import { UploadProps } from 'antd/lib/upload';
import { ButtonProps } from 'antd/lib/button';
import { PickerProps } from 'antd/lib/date-picker/generatePicker';
import { Moment } from 'moment';
import { TextProps } from 'antd/lib/typography/Text';
import { InputNumberProps } from 'antd/lib/input-number';
import { CheckboxGroupProps, CheckboxProps } from 'antd/lib/checkbox';

export interface PathType {
  uid: string;
  name?: string;
  url?: string;
  file_size?: number | string,
  thumbUrl?: string;
}

interface Options {
  label?: React.ReactNode;
  value?: string | number;
  disabled?: boolean;

  [key: string]: any;
}

interface CascadeOptions {
  value: string | number;
  label?: React.ReactNode;
  disabled?: boolean;
  children?: CascadeOptions[];

  [key: string]: any;
}

interface UploadType extends Omit<UploadProps, 'onChange'> {
  buttonText?: string;
  renderContent?: React.ReactNode;
  limited?: number; // 文件上传数量
}

interface ButtonType extends ButtonProps {
  buttonText?: string;
}

interface DatePickerType extends PickerProps<Moment> {
  DateType: 'DatePicker',
}

interface TextType extends TextProps {
  text?: string;
}

interface CheckboxPropsType extends CheckboxProps {
  text: React.ReactNode;    // 单个Checkbox时标签显示的内容
}

declare const elementType: [
  'Search',
  'Input',
  'TextArea',
  'Radio',
  'Select',
  'Cascade',
  'Upload',
  'Button',
  'DatePicker',
  'Self',
  'Text',
  'MonthPicker',
  'YearPicker',
  'InputNumber',
  'SelfContent',  // 自定义内容
  'Checkbox',
  'SelectCity'
];

/**
 * 配置参数
 */
export interface ItemCon extends FormItemProps {
  children?: any;
  elementType: typeof elementType[number];  // 元素类型
  elementOption?: Object; // 元素属性
  onChange?: (value: any, option?: any) => any;
  onSearch?: (value: any) => any;
  enterButton?: string;  // 表单为Search属性时，按钮显示的文本
  loading?: boolean;
  formItemLayout?: { labelCol?: ColProps; wrapperCol?: ColProps };
  formItemCon?: Partial<FormItemProps>;  // Form.Item子表单属性
  options?: string[] | Options[]; // RadioGroup的options
  selectOptions?: string[] | number[] | Options[]; // Select,Option配置数据
  cascadeOptions?: CascadeOptions[]; // Cascade配置数据
  ColItemCon?: ColProps; // Col响应式布局
  SelectProperty?: SelectProps<SelectOptionsType>;
  CascadeProperty?: Partial<CascaderProps>;
  UploadProperty?: UploadType;
  onClick?: (value?: any) => any;
  ButtonProperty?: ButtonType;
  supplementary?: {
    content?: React.ReactNode,
    gutter?: RowProps['gutter'],
    ItemCol?: ColProps,  // 表单元素位置布局
    AfterCol?: ColProps, // 后追加的内容位置布局
  }; // 表单元素后追加显示的内容
  DatePickerProperty?: DatePickerType;
  MonthPickerProperty?: PickerProps<Moment>;
  InputNumberProperty?: InputNumberProps;
  CheckboxProperty?: CheckboxPropsType;
  CheckboxGroupProperty?: CheckboxGroupProps;
  style?: React.CSSProperties;
  SelfElement?: React.ReactNode;// 使用自定义传入的组件
  // options中value和label的对应的字段名称,第一个是value,第二个是label。第三个参数'call_data',可以获取当前options数据,第三个参数已废弃慎用
  fieldNames?: [string, string, 'call_data'] | [string, string];
  onBlur?: FocusEventHandler;
  TextProperty?: TextType;
  NodeContent?: React.ReactNode; // 自定义的内容，相比于SelfElement，此类自定义的组件不需要注入value,onChange
  disabled?: boolean;
  picker?: any;
  form?: form
}

/**
 * ConForm组件的属性
 */
export interface PropsType extends FormProps {
  listCon: ItemCon[];
  form?: FormInstance;
  name?: string;
  formLayout?: { labelCol?: ColProps; wrapperCol?: ColProps };
  fromCon?: FormProps;
  ColCon?: ColProps; // Col响应式布局
  RowCon?: RowProps; // Row响应式布局
  search?: any
  border?: boolean;
}

export declare type listConType = Pick<PropsType, 'listCon' | 'ColCon' | form>
export declare type CancelType = 'formItemLayout' | 'formItemCon'
export declare type PublicInheritance = 'elementOption' | 'onChange' | 'style'
export declare type ElementType = Pick<ItemCon, Exclude<keyof ItemCon, keyof FormItemProps | CancelType> | 'style'>
export declare type LoadElement = Pick<ElementType, Exclude<keyof ElementType, 'elementType'>>
export declare type SelectLoadPick = 'SelectProperty' | 'selectOptions' | 'fieldNames' | PublicInheritance
export declare type SelectLoadElement = Pick<ElementType, SelectLoadPick>
export declare type CascadeLoadPick = 'CascadeProperty' | 'cascadeOptions' | PublicInheritance
export declare type CascadeLoadElement = Pick<ElementType, CascadeLoadPick>
export declare type extra = { value?: any, disabled?: boolean }
export declare type UploadLoadPick = 'UploadProperty' | PublicInheritance
export declare type UploadLoadElement = Pick<ElementType, UploadLoadPick>
export declare type ButtonLoadPick = 'ButtonProperty' | 'onClick'
export declare type ButtonLoadElement = Pick<ElementType, ButtonLoadPick>
export declare type DatePickerLoadPick = 'DatePickerProperty' | PublicInheritance
export declare type DatePickerLoadElement = Pick<ElementType, DatePickerLoadPick>
export declare type SelfLoadElement = Pick<ElementType, 'SelfElement' | PublicInheritance> & extra
export declare type MonthPickerLoadElement = Pick<ElementType, 'MonthPickerProperty' | PublicInheritance>
export declare type InputNumberLoadElement = Pick<ElementType, 'InputNumberProperty' | PublicInheritance> & extra
export declare type CheckboxLoadElement = Pick<ElementType, 'CheckboxGroupProperty' | 'CheckboxProperty' | 'options' | PublicInheritance>

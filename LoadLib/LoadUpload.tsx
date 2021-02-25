/**
 * @author Sky
 *  2020/6/24
 */

import React from 'react';
import { UploadLoadElement } from '../type';
import { Upload, Button } from 'antd';
import { UploadOutlined, PlusOutlined } from '@ant-design/icons';
import { UploadChangeParam } from 'antd/lib/upload/interface';

interface PropsType extends UploadLoadElement {
  fileList?: any;
  onChange?: (info: UploadChangeParam) => void;
}

const LoadUpload: React.FC<PropsType> = (props) => {
  const { UploadProperty, onChange, fileList } = props;

  const uploadButton = (
    <div>
      <PlusOutlined/>
      <div className="ant-upload-text">上传</div>
    </div>
  );

  const uploadButtonText = (
    <div>
      <UploadOutlined/>{UploadProperty?.buttonText || '上传文件'}
    </div>
  );

  const renderBtn = (
    UploadProperty?.listType === 'picture-card' ?
      uploadButton :
      UploadProperty?.renderContent ||
      <Button>
        {uploadButtonText}
      </Button>
  );

  function render() {
    if (!UploadProperty?.limited || !fileList || fileList.length < UploadProperty?.limited)
      return renderBtn;
    return null;
  }

  // 整合onChang 事件
  // function isChange(info: UploadChangeParam) {
  //   if (onChange)
  //     // 执行默认onChange(form组件管理状态使用)
  //     onChange(info);
  //   if (onUpChange)
  //     // 执行扩展onChang(在 UploadProperty 属性中使用)
  //     onUpChange(info);
  // }

  return (
    <>
      <Upload fileList={fileList} {...props?.UploadProperty} {...props?.elementOption} onChange={onChange}>
        {render()}
      </Upload>
    </>
  );
};

export default LoadUpload;

import { normFile } from '../utils/common';
import { ItemCon } from '../type';
import { RcFile } from 'antd/lib/upload/interface';
import EXIF from 'exif-js/exif';

// 上传组件扩展配置
export const uploadExtend: Pick<ItemCon, 'formItemCon' | 'UploadProperty'> = {
  formItemCon: {
    valuePropName: 'fileList',
    getValueFromEvent: normFile,
  },
  UploadProperty: {
    name: 'file',
    action: '',
    listType: 'picture',
    // transformFile,
    multiple: true,
    className: 'upload-list-inline',
    limited: 5,
  },
};

// 处理图片选装
export function transformFile(file: RcFile): PromiseLike<string | Blob | File> {

  return new Promise((resolve) => {
    // 读取源文件的信息
    EXIF.getData(file as any, () => {
      // 存储文件角度信息
      const Orientation = EXIF.getTag(file, 'Orientation');
      // 如果竖拍照片存在角度偏转情况，则根据原图生成新图片
      if (Orientation && [3, 6, 8].includes(Orientation)) {
        // 文件读取对象
        const reader = new FileReader();
        // 存储原图对象
        const img = new Image();
        // 读取源文件
        reader.readAsDataURL(file);

        reader.onload = () => {
          // 将对读取到的源文件信息（base64）赋值给原图对象
          img.src = reader.result as string;
          img.onload = () => {
            // 创建canvas画布
            const canvas = document.createElement('canvas');
            // 创建画布绘制上下文
            const ctx = canvas.getContext('2d');

            const { height, width } = img;

            // 设置画布宽高
            canvas.width = width;
            canvas.height = height;

            // 将原图填充画布
            ctx!.drawImage(img, 0, 0, width, height);
            // 生成blob文件
            canvas.toBlob(blob => {
              if (blob) resolve(new File([blob], file?.name, { type: 'image/jpeg' }));
              else resolve(file);
            }, 'image/jpeg', 1);
          };
        };
      } else resolve(file);
    });
  });
}

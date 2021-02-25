/**
 * 转换控件的值
 * @param e
 * @returns {*}
 */
export function normFile(e: any) {
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
}
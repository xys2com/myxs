/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-02 14:15:17
 * @LastEditTime: 2019-09-04 10:52:23
 * @LastEditors: Please set LastEditors
 */

// 文件格式转ArrayBuffer
export function fileToArrayBuffer (file: File) {
  return new Promise((resolve, reject) => {
    let fileReader = new FileReader()
    fileReader.readAsArrayBuffer(file)
    // @ts-ignore
    fileReader.onload = ({ target: { result } }) => resolve(result)
    fileReader.onerror = (e) => reject(e)
  })
}
export function fileToStr (file: File) {
  return new Promise((resolve, reject) => {
    let fileReader = new FileReader()
    fileReader.readAsBinaryString(file)
    // @ts-ignore
    fileReader.onload = ({ target: { result } }) => resolve(result)
    fileReader.onerror = (e) => reject(e)
  })
}

// 组装二维数组
export function arrTransform (arr: Array<any>, partition: number): Array<any> {
  let list = arr
  const pages: any = []
  list.forEach((item, index) => {
    const page = Math.floor(index / partition)
    if (!pages[page]) {
      pages[page] = []
    }
    pages[page].push(item)
  })
  return pages
}

/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-01 17:20:04
 * @LastEditTime: 2019-08-29 15:54:25
 * @LastEditors: Please set LastEditors
 */
declare class JSEncrypt {
  constructor([string]: any)
  setPublicKey([string]: any): void
  setPrivateKey([string]: any): void
  encryptLong([string]: any): String
  decryptLong([string]: any): String
  encrypt([string]: any): String
  decrypt([string]: any): String
}
export default JSEncrypt

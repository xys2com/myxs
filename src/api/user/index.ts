/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 11:55:41
 * @LastEditTime: 2019-08-22 15:51:27
 * @LastEditors: Please set LastEditors
 */
import { Post } from '../basics'
import { LoginParameter } from '@/api/interface'
export function userPassword (parameter: LoginParameter) {
  return Post('', parameter)
}
export function login (parameter: LoginParameter) {
  return Post('', parameter)
}
export function userMenu (parameter: LoginParameter) {
  return Post('', parameter)
}

/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 14:25:20
 * @LastEditTime: 2019-08-29 16:00:41
 * @LastEditors: Please set LastEditors
 */
import JSEncrypt from '../assets/js/RAS/jsencrypt'
let loginJsencrypt = new JSEncrypt({ default_key_size: 2048 })
let ossJsencrypt = new JSEncrypt({ default_key_size: 2048 })
ossJsencrypt.setPublicKey(
  `MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDUb6R3E4F2jQfsRBT57dsfvx9I
  vBRCMPMxeu4JrH74q91dglDYR0fQxVbIUdZwlxdiV89fl6nasQ5egV9vP2ymuxCd
  JUyuDH1bUgdLbxMmvsKdaN62U0FDzuHKcNZo3nx9YUlIy1Pi8cJqUZnf9WSQsBv4
  clvg3jnQ/gU58kfubwIDAQAB`
)

loginJsencrypt.setPublicKey(
  `MDwwDQYJKoZIhvcNAQEBBQADKwAwKAIhAOoiA2PxphQXE0vd3f/D2fi91U/gbuk6
  DSyE6yuIQUdbAgMBAAE=`
)
loginJsencrypt.setPrivateKey(
  `MIGtAgEAAiEA6iIDY/GmFBcTS93d/8PZ+L3VT+Bu6ToNLITrK4hBR1sCAwEAAQIh
  AKxwWKbndzYcuK2LvtF84a+Uzz0PTwTZprKzv3TCrj5hAhEA/0WD23oDsrtClVBT
  YnIGJwIRAOrNDj0crHT+ImWiDgA+Sa0CEQDPX7GWgrCuaeHVWsPina7RAhEA5xxc
  5oQhr6oxOy5Ob6jfpQIRAMq68IIAimmOOzRRPyVUWbs=`
)

// 用户记住密码加密
export function loginEncrypt (data: String) {
  return loginJsencrypt.encrypt(data)
}
// 用户记住密码解密
export function loginDecrypt (data: String) {
  return loginJsencrypt.decrypt(data)
}

// oss解密
export function ossDecrypt (data: String) {
  return ossJsencrypt.decrypt(data)
}

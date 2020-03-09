import JSEncrypt from '../assets/js/RAS/jsencrypt'

// 保留两位并添加千分位
export default function integral (value: number | string) {
  let str = String(value)
  if (str === '') return `0.00`
  let reg = /([0-9])(?=(?:[0-9]{3})+$)/g
  if (str.indexOf('.') === -1) {
    return str.replace(reg, '$1,') + '.00'
  } else {
    let strArr = str.split('.')
    let end =
      strArr[1].length === 1 ? strArr[1] + '0' : strArr[1].substring(0, 2)
    return strArr[0].replace(reg, '$1,') + '.' + end
  }
}

// RSA加密
export function encrypt (data: String) {
  let qxz = {
    default_key_size: 2048
  }
  let jsencrypt = new JSEncrypt(qxz)
  jsencrypt.setPublicKey(
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmNddSDjihx8sITu+dytnS0Av4nyVoxW2tWwdOFW7OqbqNCtwi5h1g1PzVOXGuzP3soUiSL7k07NtPLL2V1858Jz8ZgNYjdaSo1TBOVGqWq1YKnGcmEbWKiFdakPcayCCknWw5Tj1DIT00BJRZwtzpojffBByt3qMN8FvyJgCC3FKhwRs+BLMil6W3J2IMTrrc1j4VW+rBMo9kvo76OmzB956xL5z+n612VF2OCty6ZoocKczCUbkZXcWUjPTJrC1x2CT/zJbW3rv9Drc8utiDomDC+eJG4eOwx/5JOdzciUgC0HJT9PNYrKfhOMCKd+ohq16WVrqFYg1qftopcCOoQIDAQAB'
  )
  return jsencrypt.encryptLong(data)
}

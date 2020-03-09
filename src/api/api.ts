
import { Post, Get } from './basics'
export function getBooklist () {
  return Get('/booklist')
}
export function addBook (p: any) {
  return Post('/addbook', p)
}

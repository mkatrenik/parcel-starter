import { IPostEntity, IUserEntity } from './api.types'

import axios from 'axios'

export const fetchPosts = async () => {
  const res = await axios.get<IPostEntity[]>(
    'https://jsonplaceholder.typicode.com/posts'
  )
  return res.data
}

export const fetchUsers = async () => {
  const res = await axios.get<IUserEntity[]>(
    'https://jsonplaceholder.typicode.com/users'
  )
  return res.data
}

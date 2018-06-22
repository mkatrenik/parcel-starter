import { store as res } from 'react-easy-state'
import {
  IPostEntity,
  IUserEntity,
  fetchPosts,
  fetchUsers,
} from 'app/libs/some-api'

class AppStore {
  posts = [] as IPostEntity[]
  users = [] as IUserEntity[]

  async fetchAll() {
    const [posts, users] = await Promise.all([fetchPosts(), fetchUsers()])
    this.posts = posts
    this.users = users
  }
}

const store = res(new AppStore())

export { store }

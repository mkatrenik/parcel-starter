import { store } from '../store'

describe('Store', () => {
  it('should have `fetchAll` method', () => {
    expect(store.fetchAll).toBeDefined()
    expect(store.posts.length).toBe(0)
  })
})

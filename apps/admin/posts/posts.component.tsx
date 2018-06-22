import * as React from 'react'
import { view } from 'react-easy-state'
import { store } from '../+store'

@view
export class Posts extends React.Component {
  componentDidMount() {
    store.fetchAll()
  }

  render() {
    return (
      <div>
        {store.posts.map(p => {
          const user = store.users.find(u => u.id === p.userId) || {
            name: '-',
          }
          return (
            <div key={String(p.id)}>
              <h2>
                {p.title} ({user.name})
              </h2>
              <p>{p.body}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

import React, { Component } from 'react'

import Post from './Post.jsx'

export default class PostList extends Component {

  constructor(props) {
    super(props)
    this.state = {
        posts: [
            {id : 10, title: 'Cool Tech', rank: 1},
            {id : 20, title: 'Pokeman GO', rank: 2}
        ]
    }
  }

  render(){
      let {posts} = this.state
    return (
      <div>
         {posts.map(postData => <Post postData={postData} />)}
      </div>
    );
  }
}
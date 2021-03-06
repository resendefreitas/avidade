import React from 'react';
import './PostList.less';
import Post from './Post/Post';

class PostList extends React.Component {
  render() {
    const reversedPosts = [...this.props.posts].reverse();
    const posts = reversedPosts.map((post, index) => {
      return (
        <div key={index}>
          <Post
            {...post}
          />
        </div>
      );
    });

    return (
      <div className="PostList">
          { posts }
      </div>
    );
  };
}

export default PostList;

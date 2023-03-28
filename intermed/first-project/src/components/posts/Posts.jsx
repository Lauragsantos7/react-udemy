import React, { Component } from "react";
import { requestAllApis } from "./RequestAPi";

export default class Posts extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 30,
  };

  componentDidMount() {
    this.requestApi();
  }

  requestApi = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await requestAllApis();

    this.setState(
      {
        // definindo qtos posts serão exibidos por vez
        posts: postsAndPhotos.slice(page, postsPerPage),
        allPosts: postsAndPhotos,
      },
      this.loadMorePosts()
    );
  };

  loadMorePosts = () => {
    const { allPosts, page, postsPerPage, posts } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    this.setState({ posts, page: nextPage });
  };

  
  render() {
    const { posts, page, postsPerPage, allPosts } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;
   
    return (
      <section className="container">
        <div className="posts">
          {posts.map((post) => (
            <div key={post.id} className="post">
              <img src={post.cover} alt={post.title} />
              <div className="post-content">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            </div>
          ))}
        </div>
        <section className="btn-more">
          <button type="button"
          disabled={ noMorePosts }
          className="btn"
          onClick={this.loadMorePosts}>
            Load more posts
          </button>
        </section>
      </section>
    );
  }
}

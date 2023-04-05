import React, { useEffect, useState, useCallback } from "react";
import { requestAllApis } from "./RequestAPi";

const Posts  = ()  => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(10);
  const [searchInput, setSearchInput] = useState('');

  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filteredPosts = !!searchInput ? 
    allPosts.filter((post) => {
      return post.title.toLowerCase().includes(searchInput.toLowerCase());
   })
    : posts;
  
  
  
  const requestApi = useCallback(async (page, postsPerPage) => {

    const postsAndPhotos = await requestAllApis();
   
        // definindo qtos posts serão exibidos por vez
    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos)
    
  }, []);

  useEffect(() => {
     // para que o useEfect não recarregue sempre a primeira página ao clicar em more posts, usamos o 0 como primeiro param 
    requestApi(0, postsPerPage);
  }, [requestApi, postsPerPage])

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    setPosts(posts);
    setPage(nextPage);
  };

  
   
    return (
      <section className="container">
        {/* !! para transformar em bool */}
       <div className="searchInput"> {!!searchInput && (
        <p> Search value: { searchInput }</p>
        )}
        <input
        type="search"
        placeholder='pesquisa'
        name="searchInput"
        value={ searchInput }
        onChange={ (e) => setSearchInput(e.target.value) }
        className="text-input"
        >
        </input>
        </div>
        <div className="posts">
          { filteredPosts.length > 0 && 
          filteredPosts.map((post) => (
            <div key={post.id} className="post">
              <img src={post.cover} alt={post.title} />
              <div className="post-content">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            </div>
          )) }
          {  filteredPosts.length === 0 && (
          <h1> Not found posts</h1> 
        )}
        </div>
        <section className="btn-more">
          { !searchInput && (
          <button type="button"
          disabled={ noMorePosts }
          className="btn"
          onClick={ loadMorePosts }>
            Load more posts
          </button>
  )}
        </section>
      </section>
    );
  }


  export default Posts;
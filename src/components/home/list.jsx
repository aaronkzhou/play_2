import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";

const PostList = ({ posts }) => {
  const [isLoadingMore, setIsLoadingMore] = React.useState(false);

  const onClick = () => {
    setIsLoadingMore(true);
  };

  return (
    <>
      <ul className='list-container'>
        {posts.slice(0, isLoadingMore ? posts.length : 6).map((item) => {
          return (
            <li key={item.id} className='list-wrapper'>
              <Link to={`/posts/${item.id}`}>
                <div className='overview-wrapper'>{item.title}</div>
              </Link>
            </li>
          );
        })}
      </ul>
      {!isLoadingMore && posts.length > 6 && (
        <button className='button' onClick={onClick}>
          Load More...
        </button>
      )}
    </>
  );
};

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostList;

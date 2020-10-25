import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import { Store } from "../../helper/store";
import { addCommentAction, deleteCommentAction } from "../../helper/actions";

const Details = ({ id }) => {
  const { state, dispatch } = React.useContext(Store);
  const [comment, setComment] = useState("");
  const post = state.posts.find((item) => item.id.toString() === id);

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const addComment = (event) => {
    event.preventDefault();
    addCommentAction({ id, comment, state, dispatch });
  };

  const removeComment = (index) => {
    deleteCommentAction({ id, index, state, dispatch });
  };

  return (
    <>
      <Link to={"/"}>home</Link>
      <h3>{post?.title}</h3>
      <div className={"detail-wrapper"}>
        <p>{post?.body}</p>
      </div>
      <div className={"comment-wrapper"}>
        <span>comments:</span>
        <ul>
          {post?.comment?.map((item, index) => (
            <li key={`comment-${index}`} className='comment-item-wrapper'>
              {item}
              <button
                className={"remove-button"}
                onClick={() => {
                  removeComment(index);
                }}>
                remove comment
              </button>
            </li>
          ))}
        </ul>
      </div>
      <form className={"add-comment-wrapper"}>
        <input
          type='textarea'
          name='name'
          id='comment'
          className={"comment-box"}
          placeholder={"place your comment here"}
          onChange={handleChange}
          value={comment}
        />
        <button className='button' onClick={addComment}>
          Add your comment
        </button>
      </form>
    </>
  );
};

export default Details;

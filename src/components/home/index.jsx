import React from "react";
import { Store } from "../../helper/store";

const PostList = React.lazy(() => import("./list"));

const Home = () => {
  const { state } = React.useContext(Store);

  return (
    <>
      <h1>Hey, welcome to home page</h1>
      <React.Suspense
        fallback={
          <span
            style={{
              color: "white",
              fontSize: 30,
            }}>
            loading spinner here...
          </span>
        }>
        <PostList posts={state.posts} />
      </React.Suspense>
    </>
  );
};

export default Home;

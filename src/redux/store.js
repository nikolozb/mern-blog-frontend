import { configureStore } from "@reduxjs/toolkit";

import PostsReducer from "./slices/posts";
import UsersReducer from "./slices/users";

const store = configureStore({
  reducer: {
    posts: PostsReducer,
    users: UsersReducer,
  },
});

export default store;

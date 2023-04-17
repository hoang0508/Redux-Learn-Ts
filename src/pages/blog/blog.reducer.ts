import { createSlice } from "@reduxjs/toolkit";
import { initalPostList } from "constaints/blog";
import { Post } from "types/blog.type";

interface BlogState {
  postList: Post[];
  editingPost: Post | null;
}

const initalState: BlogState = {
  postList: initalPostList,
  editingPost: null,
};

// export const addPost = createAction<Post>("blog/addPost");
// export const deletePost = createAction<string>("blog/deletePost");
// export const startUpdatePost = createAction<string>("blog/startUpdatePost");
// export const cancelUpdatePost = createAction("blog/cancelUpdatePost");
// export const finishUpdatePost = createAction<Post>("blog/finishUpdatePost");

// const blogReducer = createReducer(initalState, (builder) => {
//   builder
//     .addCase(addPost, (state, action) => {
//       state.postList.push(action.payload);
//     })
//     .addCase(deletePost, (state, action) => {
//       const postId = action.payload;
//       state.postList = state.postList.filter((post) => post.id !== postId);
//     })
//     .addCase(startUpdatePost, (state, action) => {
//       const postId = action.payload;
//       const foundPost =
//         state.postList.find((post) => post.id === postId) || null;
//       state.editingPost = foundPost;
//     })
//     .addCase(finishUpdatePost, (state, action) => {
//       const id = action.payload.id;
//       state.postList = state.postList.map((post) => {
//         if (id === post.id) {
//           return action.payload;
//         }
//         return post;
//       });
//       state.editingPost = null;
//     })
//     .addCase(cancelUpdatePost, (state, action) => {
//       state.editingPost = null;
//     });
// });

const blogSlice = createSlice({
  name: "blog",
  initialState: initalState,
  reducers: {
    addPost: (state, action) => ({
      ...state,
      postList: [...state.postList, action.payload],
    }),
    deletePost: (state, action) => {
      const postId = action.payload;
      state.postList = state.postList.filter((post) => post.id !== postId);
    },
    startUpdatePost: (state, action) => {
      const postId = action.payload;
      const foundPost =
        state.postList.find((post) => post.id === postId) || null;
      state.editingPost = foundPost;
    },
    finishUpdatePost: (state, action) => {
      const id = action.payload.id;
      state.postList = state.postList.map((post) => {
        if (id === post.id) {
          return action.payload;
        }
        return post;
      });
      state.editingPost = null;
    },
    cancelUpdatePost: (state) => {
      state.editingPost = null;
    },
  },
});

export const {
  addPost,
  deletePost,
  finishUpdatePost,
  startUpdatePost,
  cancelUpdatePost,
} = blogSlice.actions;
export default blogSlice.reducer;

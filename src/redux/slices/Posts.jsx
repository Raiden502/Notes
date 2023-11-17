import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: true,
	error: null,
	story: [],
};

const PostsSlice = createSlice({
	name: "posts",
	initialState: initialState,
	reducers: {
        onSuccess(state, action){
            state.story = action.payload.data
            state.isLoading = false
            state.error=null
        },
        isError(state, action){
            state.error = action.payload.error
            state.isLoading = false
        },
        onReload(state){
            state.story=[]
            state.isLoading=true
            state.error=null
        }
    }
});

export const {onSuccess, isError, onReload} = PostsSlice.actions;
export default PostsSlice.reducer


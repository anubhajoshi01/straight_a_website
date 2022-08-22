import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import blogService from "./blogService";

const initialState = {
    blogs: [],
    showBlog: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    isUpdated: false,
    isDeleted: false,
    message: ''
}

export const createPost = createAsyncThunk(
    'blog/create',
    async(data, thunkAPI) => {
        try{
            const token = thunkAPI.getState().auth.user.token
            return await blogService.createPost(data, token)
        }catch(e){
            console.log(e)
            const message = (e.response && e.response.data && e.response.data.message) || e.message || e.toString()
            console.log(message)
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const getPosts = createAsyncThunk(
    'blog/getAll', 
    async(_, thunkAPI) => {
        try{
            const data = await blogService.getPosts()
            //console.log(data)
            return data
        }
        catch(e){
            console.log(e)
            const message = (e.response && e.response.data && e.response.data.message) || e.message || e.toString()
            console.log(message)
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const getPostById = createAsyncThunk(
    'blog/get', 
    async(id, thunkAPI) => {
        console.log('getting by id ', id)
        try{
            const data = await blogService.getPostById(id)
            console.log(data)
            return data
        }
        catch(e){
            console.log(e)
            const message = (e.response && e.response.data && e.response.data.message) || e.message || e.toString()
            console.log(message)
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const updatePost = createAsyncThunk(
    'blog/update',
    async( allData, thunkAPI) => {
        try{
            const {id, data} = allData
            const token = thunkAPI.getState().auth.user.token
            console.log(`token ${token}`)
            const result = await blogService.updatePost(id, data, token)
            console.log(result)
            return result
        }catch(e){
            console.log(e)
            const message = (e.response && e.response.data && e.response.data.message) || e.message || e.toString()
            console.log(message)
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const deletePost = createAsyncThunk(
    'blog/delete', 
    async(id, thunkAPI) => {
        try{
            const token = thunkAPI.getState().auth.user.token
            return await blogService.deletePost(id, token)
        }catch(e){
            console.log(e)
            const message = (e.respone && e.respone.data && e.respone.data.message) || e.message || e.toString()
            console.log(message)
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createPost.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.blogs.push(action.payload)
                console.log('state create post')
            })
            .addCase(createPost.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getPosts.pending, (state) => {
                console.log('get posts pending')
                state.isLoading = true
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                console.log('get posts fulfiled')
                state.isLoading = false
                state.isSuccess = true
                state.blogs = action.payload
                console.log('state get posy')
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deletePost.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                console.log('in case delete fulfilled')
                state.isLoading = false
                state.isSuccess = true
                state.isDeleted = true
                state.blogs = state.blogs.filter(
                    (goal) => goal._id !== action.payload.id
                )
                console.log('state delete post')
                
            })
            .addCase(deletePost.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(updatePost.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                //state.isSuccess = true
                state.isLoading = false
               /* for(let i = 0; i < state.blogs.length; i++){
                    if(state.blogs[i]._id === action.payload.id){
                        state.blogs[i] = action.payload
                    }
                } */
                state.isUpdated = true
                console.log(action.payload)
            })
            .addCase(updatePost.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getPostById.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getPostById.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.showBlog = action.payload
                console.log('state get post by id')
            })
            .addCase(getPostById.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = blogSlice.actions
export default blogSlice.reducer
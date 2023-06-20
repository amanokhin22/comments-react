import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {addComment, deleteComment, fetchAllComments} from './commentsThunks';
import {CommentModel} from '../api/comments/types';

interface CommentsState {
    loading: boolean;
    comments: Array<any>
    activeComment: string;
}

const initialState: CommentsState = {
    loading: false,
    comments: [],
    activeComment: '',
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        changeActiveComment: (state, action: PayloadAction<string>) => {
            state.activeComment = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllComments.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(fetchAllComments.fulfilled, (state, action) => {
            state.loading = false;
            state.comments = action.payload.comments;
        });

        builder.addCase(fetchAllComments.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(deleteComment.fulfilled, (state, action) => {
            state.comments = state.comments.filter(comment => comment.id !== action.payload.id);
        });

        builder.addCase(addComment.fulfilled, (state, action: PayloadAction<CommentModel>) => {
            state.comments.push(action.payload);
        })
    }
});

export const {changeActiveComment} = commentsSlice.actions;
export default commentsSlice.reducer;
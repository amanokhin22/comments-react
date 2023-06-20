import {createAsyncThunk} from '@reduxjs/toolkit';
import {apiComments} from '../api/comments/api';
import {CommentModel} from '../api/comments/types';
import {changeActiveComment} from './commentsSlice';

export const fetchAllComments = createAsyncThunk(
    'comments/fetchAll',
    async (_, {dispatch}) => {
        dispatch(changeActiveComment(apiComments.getActiveComment()));
        return await apiComments.getAll()
    }
);

export const deleteComment = createAsyncThunk(
    'comments/delete',
    async (comment: CommentModel) => {
        return await apiComments.deleteComment(comment);
    }
);

export const saveActiveComment = createAsyncThunk(
    'comments/saveActiveComment',
    async (comment: string, {dispatch}) => {
        apiComments.saveActiveComment(comment);
        dispatch(changeActiveComment(comment));
    }
);

export const addComment = createAsyncThunk(
    'comments/addComment',
    async (comment: string, {dispatch}) => {
        const addedComment = await apiComments.addComment(comment);
        apiComments.saveActiveComment('');
        dispatch(changeActiveComment(''));
        return addedComment;
    }
);

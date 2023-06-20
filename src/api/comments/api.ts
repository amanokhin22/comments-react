import axios, {AxiosError} from 'axios';
import {CommentModel, CommentsResponseModel} from './types';

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/comments',
});

const LOCAL_STORAGE_ACTIVE_COMMENT_KEY = 'activeComment';

const MOCK_POST_ID = 100;

const MOCK_USER_ID = 42

export const apiComments = {
    async getAll() {
        const res = await axiosInstance.get<CommentsResponseModel>('');
        return res.data;
    },

    async deleteComment(comment: CommentModel) {
        try {
            const res = await axiosInstance.delete<CommentModel>(String(comment.id));
            return res.data;
        } catch (error) {
            console.log(error);
            const err = error as AxiosError;
            // Handle not found issue, because It is not found It is already deleted
            if (err.response?.status === 404) {
                return comment;
            }
            throw error;
        }
    },

    async addComment(body: string) {
        const addComment = {
            postId: MOCK_POST_ID,
            body,
            userId: MOCK_USER_ID
        };
        const res = await axiosInstance.post<CommentModel>('add', addComment);
        return res.data;
    },

    saveActiveComment(comment: string) {
        localStorage.setItem(LOCAL_STORAGE_ACTIVE_COMMENT_KEY, comment);
    },

    getActiveComment(): string {
        return localStorage.getItem(LOCAL_STORAGE_ACTIVE_COMMENT_KEY) || '';
    }
};

import {RootState} from './index';
import {createSelector} from '@reduxjs/toolkit';

export const selectCommentsState = (state: RootState) => state.comments;

export const selectComments = createSelector(selectCommentsState, (commentsState) => commentsState.comments);
export const selectActiveComment = createSelector(selectCommentsState, (commentsState) => commentsState.activeComment);


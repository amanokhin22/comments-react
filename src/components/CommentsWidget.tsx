import {CommentsList} from './CommentsList';
import {AddCommentForm} from './AddCommentForm';
import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../store';
import {addComment, deleteComment, fetchAllComments, saveActiveComment} from '../store/commentsThunks';
import {selectActiveComment, selectComments} from '../store/commentsSelectors';
import {CommentModel} from '../api/comments/types';

import styles from '../styles/styles.module.scss';

export const CommentsWidget = () => {
    const dispatch = useAppDispatch();
    const comments = useAppSelector(selectComments);
    const activeComment = useAppSelector(selectActiveComment);
    useEffect(() => {
        dispatch(fetchAllComments());
        // eslint-disable-next-line
    }, []);

    const onCommentDelete = (comment: CommentModel) => {
        dispatch(deleteComment(comment));
    }

    const onCommentChanged = (comment: string) => {
        dispatch(saveActiveComment(comment));
    }

    const onCommentAdd = (comment: string) => {
        dispatch(addComment(comment));
    }
    return (
        <div className={styles.widget_wrapper}>
            <CommentsList comments={comments} onCommentDelete={onCommentDelete}/>
            <AddCommentForm activeComment={activeComment} onCommentAdd={onCommentAdd}
                            onCommentChanged={onCommentChanged}/>
        </div>
    )
}

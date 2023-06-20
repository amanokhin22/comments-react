import {CommentItem} from './CommentItem';
import {FC} from 'react';
import {CommentModel} from '../api/comments/types';

import styles from '../styles/styles.module.scss';

interface CommentsListTypes {
    comments: CommentModel[];
    onCommentDelete: (comment: CommentModel) => void;
}

export const CommentsList: FC<CommentsListTypes> = ({comments = [], onCommentDelete}) => {
    return (
        <ul className={styles.comments_wrapper}>
            {comments?.map(comment => (
                <li className={styles.comment_item}
                    key={comment.id}>
                    <CommentItem comment={comment} onDelete={() => onCommentDelete(comment)}/>
                </li>
            ))}
        </ul>
    )
}

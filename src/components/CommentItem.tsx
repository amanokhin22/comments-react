import {FC} from 'react';

import {CommentModel} from '../api/comments/types';

import styles from '../styles/styles.module.scss';

interface CommentItemTypes {
    comment: CommentModel;
    onDelete: () => void
}

export const CommentItem: FC<CommentItemTypes> = ({comment, onDelete}) => {
    const getSortName = (fullName: string) => {
        const [firstName, lastName] = fullName.trim().split(' ');
        return firstName.toUpperCase().slice(0, 1) + (lastName?.toUpperCase()?.slice(0, 1) || '');
    }
    return (
        <div>
            <div className={styles.user}>
                <div className={styles.initials}>
                    {getSortName(comment.user.username)}
                </div>
                <div className={styles.username}>
                    {comment.user.username}
                </div>
            </div>
            <div>
                <div className={styles.main_comment}>
                    <p className={styles.text}>{comment.body}</p>
                    <button className={styles.delete_button} onClick={onDelete}>X</button>
                </div>
            </div>
        </div>
    )
}

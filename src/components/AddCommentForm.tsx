import {FC, FormEvent} from 'react';

import styles from '../styles/styles.module.scss';

interface AddCommentFormTypes {
    activeComment: string;
    onCommentChanged: (comment: string) => void;
    onCommentAdd: (comment: string) => void;
}

export const AddCommentForm: FC<AddCommentFormTypes> = ({activeComment, onCommentChanged, onCommentAdd}) => {
    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (activeComment) {
            onCommentAdd(activeComment);
        }
    }

    return (
        <div>
            <form className={styles.form_wrapper} onSubmit={onSubmit}>
                <textarea
                    className={styles.textarea}
                    placeholder="Please leave your comment"
                    name="comment"
                    onChange={(event) => onCommentChanged(event.target.value)}
                    value={activeComment}
                    rows={10}>
                </textarea>
                {/*the button is located differently than in the example, in order to be visible textarea*/}
                <button className={styles.form_button}>Send</button>
            </form>
        </div>
    )
}
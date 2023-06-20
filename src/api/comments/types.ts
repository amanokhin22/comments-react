export interface CommentUserModel {
    id: number;
    username: string;
}

export interface CommentModel {
    id: number;
    body: string;
    postId: number;
    user: CommentUserModel;
}

export interface CommentsResponseModel {
    comments: CommentModel[];
    total: number;
    skip: number;
    limit: number;
}

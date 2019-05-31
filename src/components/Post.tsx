import React, { FC } from 'react';

export interface PostProps {
  title: string;
  postImageURL: string;
  body: string;
  createdTime: string;
  isLoading?: boolean;
}

const Post: FC<PostProps> = ({
  title = '',
  postImageURL = '',
  body = '',
  createdTime = '',
  isLoading = false,
}) => {
  const postImageTitle = `${title}の画像`;

  return (
    <>
      {isLoading ? (
        <div>読み込み中</div>
      ) : (
        <article>
          <h1>{title}</h1>
          <time dateTime={createdTime}>
            <i className="far fa-clock" />
            {createdTime}
          </time>
          <figure>
            <img src={postImageURL} alt={postImageTitle} />
          </figure>
          {/* dangerouslySetInnerHTMLは暫定対応 */}
          <div dangerouslySetInnerHTML={{ __html: body }} />
        </article>
      )}
    </>
  );
};

export default Post;

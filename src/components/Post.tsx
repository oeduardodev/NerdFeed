import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { ChangeEvent, FormEvent, InvalidEvent, useState, } from "react";

import Avatar from "./Avatar";
import Comment from "./Comment";

import styles from "./Post.module.css";

interface Author {
  name: string,
  role:string,
  avatarUrl: string;
}

interface Content {
  type:'paragrafo' | 'link',
  content:string;
}

export interface PostType{
  id:Number,
  author: Author,
  publishedAt: Date,
  content:Content[];
}

interface PostProps {
  post: PostType;
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState(["Que Post Legal, hein? #ironia"]);

  const publisheDataFormatted = format(
    post.publishedAt,
    "dd 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publisheDataFormattedNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const [newCommentText, setNewCommentText] = useState("");

  function handleCreateComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Digite seu comentário!");
  }

  function deleteComment(commentToDelete: string) {
    const commentsWtithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    setComments(commentsWtithoutDeletedOne);
  }

  const isCommentEmpty = newCommentText.length === 0;

  return (
    <div>
      <article className={styles.Post}>
        <header>
          <div className={styles.Author}>
            <Avatar src={post.author.avatarUrl} />
            <div className={styles.AuthorInfo}>
              <strong> {post.author.name} </strong>
              <span>{post.author.role}</span>
            </div>
          </div>

          <time
            title={publisheDataFormatted}
            dateTime={post.publishedAt.toISOString()}
          >
            {publisheDataFormattedNow}
          </time>
        </header>

        <div className={styles.Content}>
          {post.content.map((line) => {
            if (line.type === "paragrafo") {
              return <p key={line.content}>{line.content}</p>;
            } else if (line.type === "link") {
              return (
                <p key={line.content}>
                  <a>{line.content}</a>
                </p>
              );
            }
          })}
        </div>

        <form onSubmit={handleCreateComment} className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea
            name="comment"
            placeholder="O que você pensa sobre isso?"
            value={newCommentText}
            required={true}
            onChange={handleNewCommentChange}
            onInvalid={handleNewCommentInvalid}
          />

          <footer>
            <button type="submit" disabled={isCommentEmpty}>Publicar</button>
          </footer>

        </form>

        <div className={styles.commentList}>
          {comments.map((comment) => (
            <Comment
              content={comment}
              key={comment}
              onDeleteComment={deleteComment}
            />
          ))}
        </div>

      </article>
    </div>
  );
  
}

export default Post;

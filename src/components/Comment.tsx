import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import Avatar from "./Avatar";
import styles from "./Comment.module.css";

interface CommentProps{
  content:string;
  onDeleteComment:(comment:string) => void;
}

function Comment({content, onDeleteComment}:CommentProps) {
 
const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment(){
    onDeleteComment(content)
  }

  function handleLikeCount(){
    setLikeCount(likeCount +1)
  }


  return (
    <div className={styles.Comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/94940400?v=4" alt="" />
      <div className={styles.CommentBox}>
        <div className={styles.CommentContent}>
          <header>
            <div className={styles.authorTime}>
              <strong>Eduardo Leite</strong>
              <time title="09 de Março às 18:15" dateTime="09-03-2023">
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar Comentário">
          <Trash size={24} />
        </button>
          </header>

          <p>{content}</p>
          
        </div>



        <footer>
          <button onClick={handleLikeCount}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Comment;

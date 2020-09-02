import Voter from "./Voter";
import React from "react";
import CommentDeleter from "./CommentDeleter";

const CommentsList = ({ comments, loggedInUser, deleteComment }) => {
  return (
    <div className="CommentsContainer">
      <ul>
        {comments.map((comment) => {
          return (
            <section key={comment.comment_id} className="SingleComment">
              <p>
                by {comment.author}, {comment.created_at}
              </p>
              <hr />
              <p className="CommentBody">{comment.body}</p>
              <hr />
              <Voter
                id={comment.comment_id}
                votes={comment.votes}
                type="comments"
                loggedInUser={loggedInUser}
              />
              <CommentDeleter
                deleteComment={deleteComment}
                comment={comment}
                loggedInUser={loggedInUser}
              />
            </section>
          );
        })}
      </ul>
    </div>
  );
};

export default CommentsList;

import Voter from "./Voter";
import React from "react";

const CommentsList = ({ comments, loggedInUser }) => {
  return (
    <div className="CommentsContainer">
      <ul>
        {comments.map((comment) => {
          return (
            <section key={comment.comment_id} className="SingleComment">
              <p>
                by {comment.author}, {comment.created_at}
              </p>
              <p className="CommentBody">{comment.body}</p>
              <Voter
                id={comment.comment_id}
                votes={comment.votes}
                type="comments"
                loggedInUser={loggedInUser}
              />
              <br />
            </section>
          );
        })}
      </ul>
    </div>
  );
};

export default CommentsList;

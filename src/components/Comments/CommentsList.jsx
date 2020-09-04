import Voter from "../Article/Voter";
import React from "react";
import CommentDeleter from "./CommentDeleter";
import { StyledCommentCard } from "../../styling/styledComments";

const CommentsList = ({ comments, loggedInUser, deleteComment }) => {
  return (
    <section className="CommentsContainer">
      <ul>
        {comments.map((comment) => {
          const dateitem = new Date(comment.created_at).toLocaleDateString();
          return (
            <li key={comment.comment_id} className="SingleComment">
              <h4>
                {comment.author}, {dateitem}
              </h4>
              <hr />
              <StyledCommentCard className="CommentBody">
                {comment.body}
              </StyledCommentCard>
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
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default CommentsList;

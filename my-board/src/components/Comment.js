import axios from "axios";
import React from "react";
import { Button, Form } from "semantic-ui-react";

const Comment = ({ boardNo, commentData }) => {
  const commentUpdate = async (commentNo, commenter, commentContent) => {
    const comment = {
      commentNo: commentNo.value,
      commenter: commenter.value,
      commentContent: commentContent.value,
    };

    await axios
      .put(`http://localhost:8080/comment/${boardNo}`, comment, {
        headers: {
          "access-control-allow-origin": "true",
        },
      })
      .then(function () {
        window.location.reload();
      });
  };

  const commentDelete = async (commentNo) => {
    await axios
      .delete(`http://localhost:8080/comment/` + commentNo.value, null, {
        headers: {
          "access-control-allow-origin": "true",
        },
      })
      .then(function () {
        window.location.reload();
      });
  };

  return commentData.map((data, index) => {
    return (
      <Form.Field key={index}>
        <div className="comment">
          <input
            type="hidden"
            id={"no" + data.commentNo}
            defaultValue={data.commentNo}
          ></input>

          <label>댓글 작성자 </label>
          <input
            type="text"
            id={"commenter" + data.commenter}
            defaultValue={data.commenter}
          ></input>

          <label>댓글 내용 </label>
          <input
            type="text"
            id={"commentContent" + data.commentContent}
            defaultValue={data.commentContent}
          ></input>
          <div className="btn">
            <Button
              onClick={() =>
                commentUpdate(
                  document.getElementById("no" + data.commentNo),
                  document.getElementById("commenter" + data.commenter),
                  document.getElementById(
                    "commentContent" + data.commentContent
                  )
                )
              }
            >
              수정
            </Button>
            <Button
              onClick={() =>
                commentDelete(document.getElementById("no" + data.commentNo))
              }
            >
              삭제
            </Button>
          </div>
        </div>
      </Form.Field>
    );
  });
};

export default Comment;

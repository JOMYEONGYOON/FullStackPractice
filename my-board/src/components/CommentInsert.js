import axios from "axios";
import React, { useRef } from "react";
import { Button, Form } from "semantic-ui-react";

const CommentInsert = ({ boardNo }) => {
  const commenter1 = useRef(null);
  const commentContent2 = useRef(null);

  const commentInsert = async () => {
    const comment = {
      commenter: commenter1.current.value,
      commentContent: commentContent2.current.value,
    };

    await axios
      .post(`http://localhost:8080/comment/${boardNo}`, comment, {
        headers: {
          "access-control-allow-origin": "true",
        },
      })
      .then(function () {
        window.location.reload();
      });
  };

  return (
    <Form.Field>
      <div className="comment">
        <label>댓글 작성자</label>
        <input type="text" ref={commenter1}></input>
        <label>댓글 내용 </label>
        <input type="text" ref={commentContent2}></input>
        <div className="btn">
          <Button onClick={commentInsert}>작성</Button>
        </div>
      </div>
    </Form.Field>
  );
};

export default CommentInsert;

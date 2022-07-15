import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";

const Insert = () => {
  const navigate = useNavigate();

  const boardTitleRef = useRef(null);
  const userRef = useRef(null);
  const boardContent = useRef(null);

  const insert = async (e) => {
    e.preventDefault();

    const board = {
      boardNo: 0,
      boardTitle: boardTitleRef.current.value,
      boardContent: boardContent.current.value,
    };
    const userEmail = userRef.current.value;

    await axios
      .post(`http://localhost:8080/board/${userEmail}`, board, {
        headers: {
          "access-control-allow-origin": "true",
        },
      })
      .then(function () {
        navigate("/");
      });
  };

  return (
    <div>
      <h1>게시판 등록</h1>

      <Form>
        <Form.Field>
          <label>제목</label>
          <input type="text" ref={boardTitleRef}></input>
          <label>내용</label>
          <textarea ref={boardContent}></textarea>
          <label>작성자</label>
          <input type="text" ref={userRef}></input>
          <Button className="btn" type="button" onClick={insert}>
            등록
          </Button>
        </Form.Field>
      </Form>
    </div>
  );
};

export default Insert;

import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";
import "../App.css";
import Comment from "./Comment";
import CommentInsert from "./CommentInsert";
const BoardDetail = () => {
  let navigate = useNavigate();
  const { boardNo } = useParams();
  const [detailData, setDetailData] = useState([]);
  const [commentData, setCommentData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [commentvisible, setCommentVisible] = useState(false);
  const boardTitleRef = useRef(null);
  const userRef = useRef(null);
  const boardContent = useRef(null);

  useEffect(() => {
    const getDetailData = async () => {
      const response = await axios.get(
        `http://localhost:8080/board/${boardNo}`,
        {
          headers: {
            "access-control-allow-origin": "true",
          },
        }
      );
      setDetailData(response.data);
    };

    const commentSelect = async (e) => {
      await axios
        .get(`http://localhost:8080/comment/${boardNo}`, {
          headers: {
            "access-control-allow-origin": "true",
          },
        })
        .then(function (response) {
          setCommentData(response.data);
        });
    };

    commentSelect();
    getDetailData();
  }, [boardNo]);

  const update = async (e) => {
    e.preventDefault();

    const board = {
      boardNo: boardNo,
      boardTitle: boardTitleRef.current.value,
      boardContent: boardContent.current.value,
      user: {
        userEmail: userRef.current.value,
      },
    };

    await axios
      .put(`http://localhost:8080/board/${boardNo}`, board, {
        headers: {
          "access-control-allow-origin": "true",
        },
      })
      .then(function () {
        navigate("/");
      });
  };

  const boardDelete = async (e) => {
    e.preventDefault();
    await axios
      .delete(`http://localhost:8080/board/${boardNo}`, {
        headers: {
          "access-control-allow-origin": "true",
        },
      })
      .then(function () {
        navigate("/");
      });
  };

  const commentListExecute = (e) => {
    e.preventDefault();
    setVisible(true);
  };

  const commentInsertExecute = (e) => {
    e.preventDefault();
    setCommentVisible(true);
  };

  return (
    <div>
      <h2>게시판 보기</h2>
      <Form>
        <Form.Field>
          <label>제목</label>
          <input
            type="text"
            defaultValue={detailData.boardTitle}
            ref={boardTitleRef}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>내용</label>
          <textarea
            ref={boardContent}
            defaultValue={detailData.boardContent}
          ></textarea>
        </Form.Field>

        <Form.Field>
          <label>작성자</label>
          <input
            type="text"
            defaultValue={
              detailData.user === undefined ? "" : detailData.user.userEmail
            }
            ref={userRef}
          ></input>
        </Form.Field>

        <Form.Field>
          <label>등록일</label>
          <input
            type="text"
            defaultValue={detailData.createdDate}
            readOnly={true}
          ></input>
        </Form.Field>

        <Form.Field>
          <label>수정일</label>
          <input
            type="text"
            defaultValue={detailData.modifiedDate}
            readOnly={true}
          ></input>
        </Form.Field>

        {visible === true ? (
          <Comment boardNo={boardNo} commentData={commentData}></Comment>
        ) : (
          ""
        )}

        {commentvisible === true ? <CommentInsert boardNo={boardNo} /> : ""}
      </Form>
      <div className="btn">
        <Button type="button">
          <Link to="/">리스트로</Link>
        </Button>
        <Button type="button" onClick={update}>
          수정하기
        </Button>
        <Button type="button" onClick={boardDelete}>
          삭제하기
        </Button>
        <Button type="button" onClick={commentListExecute}>
          댓글({commentData.length})
        </Button>
        <Button type="button" onClick={commentInsertExecute}>
          댓글 작성
        </Button>
      </div>
    </div>
  );
};

export default BoardDetail;

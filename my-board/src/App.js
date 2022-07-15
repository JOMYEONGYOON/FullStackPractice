import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "./App.css";
import BoardList from "./components/BoardList";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [boardData, setBoardData] = useState([]);

  useEffect(() => {
    const dataList = async () => {
      const response = await axios.get(
        `http://localhost:8080/board?page=${currentPage}&size=10`,
        {
          headers: {
            "access-control-allow-origin": "true",
          },
        }
      );
      setBoardData(response.data);
    };

    dataList();
  }, [currentPage]);

  return (
    <div className="App">
      <div>
        <h2>게시판</h2>
        <Link to="/insert">
          <Button>등록</Button>
        </Link>
      </div>

      <BoardList
        boardData={boardData}
        setCurrentPage={setCurrentPage}
      ></BoardList>
    </div>
  );
}

export default App;

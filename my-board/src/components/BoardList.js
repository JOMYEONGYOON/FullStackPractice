import React from "react";
import { Link } from "react-router-dom";
import { Icon, Menu, Table } from "semantic-ui-react";

const BoardList = ({ boardData, setCurrentPage }) => {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>#</Table.HeaderCell>
          <Table.HeaderCell>제목</Table.HeaderCell>
          <Table.HeaderCell>작성자</Table.HeaderCell>
          <Table.HeaderCell>등록일</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      {boardData.dtoList != null
        ? boardData.dtoList.map((data, index) => {
            return (
              <Table.Body key={index}>
                <Table.Row>
                  <Table.Cell>{data.boardNo}</Table.Cell>
                  <Table.Cell>
                    <Link to={`/boardDetail/${data.boardNo}`}>
                      {data.boardTitle}
                    </Link>
                  </Table.Cell>
                  <Table.Cell>{data.user.userEmail.split("@", 1)}</Table.Cell>
                  <Table.Cell>{data.createdDate}</Table.Cell>
                </Table.Row>
              </Table.Body>
            );
          })
        : ""}

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="8">
            <Menu floated="right" pagination>
              {boardData.prev === true ? (
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
              ) : (
                ""
              )}

              {boardData.pageList != null
                ? boardData.pageList.map((number, index) => {
                    return (
                      <Menu.Item
                        as="a"
                        key={number}
                        style={
                          boardData.page === number
                            ? { color: "red" }
                            : { color: "black" }
                        }
                        onClick={(event) => setCurrentPage(event.target.text)}
                      >
                        {number}
                      </Menu.Item>
                    );
                  })
                : ""}

              {boardData.next === true ? (
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              ) : (
                ""
              )}
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};

export default BoardList;

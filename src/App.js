import "./App.css";
import { useState } from "react";
import { styled } from "styled-components";

let number = 4;

function App() {
  const initialState = {
    id: 0,
    content: "",
  };
  const [todo, setTodo] = useState(initialState);
  const [likes, setLikes] = useState([0, 0, 0, 0]);
  const [todos, setTodos] = useState([
    { id: 0, content: "리액트 공부하기" },
    { id: 1, content: "점심 먹기" },
    { id: 2, content: "자바스크립트 공부하기" },
    { id: 3, content: "자바스크립트 마스터하기" },
  ]);

  return (
    <>
      <StForm>
        <label style={{ fontWeight: "bold" }}>Todo:</label> &nbsp;
        <input
          className="input-box"
          placeholder="할 일을 입력해주세요!"
          value={todo.content}
          onChange={(e) => {
            setTodo({
              ...todo,
              content: e.target.value,
              id: number,
            });
          }}
        />
        <StButton
          onClick={(event) => {
            event.preventDefault();
            if (todo.content.trim() === "") {
              alert("할 일을 입력해주세요!");
            } else {
              setLikes([...likes, 0]);
              setTodos([...todos, todo]);
              setTodo(initialState);
              number += 1;
            }
            console.log(todos);
          }}
        >
          추가
        </StButton>
      </StForm>
      <div className="todo-container">
        {todos.map((todo) => {
          return (
            <StCard key={todo.id}>
              <p>{todo.content}</p>
              <p> 💙 {likes[todo.id]}</p>
              <div className="button-set">
                <StButton
                  onClick={() => {
                    const newTodos = todos.filter((td) => {
                      return td.id !== todo.id;
                    });
                    setTodos(newTodos);
                  }}
                >
                  삭제
                </StButton>
                <StButton
                  onClick={() => {
                    const newLikes = [...likes];
                    newLikes[todo.id]++;
                    setLikes(newLikes);
                  }}
                >
                  좋아요
                </StButton>
              </div>
            </StCard>
          );
        })}
      </div>
    </>
  );
}

const StForm = styled.form`
  display: flex;
  align-items: center;
  margin: 20px;
`;

const StCard = styled.div`
  box-sizing: border-box;
  padding: 10px;
  width: 220px;
  height: auto;
  border: 3px solid #8294c4;
  border-radius: 15px;
  background-color: #acb1d6;
  color: white;
  font-weight: bold;
`;

const StButton = styled.button`
  width: 70px;
  height: 30px;
  border: 3px solid #8294c4;
  border-radius: 15px;
  margin-left: 10px;
  background-color: white;
  color: #8294c4;
  font-weight: bold;
  &:hover {
    background-color: #8294c4;
    color: white;
    cursor: pointer;
    transition: all 0.2s;
  }
`;

export default App;

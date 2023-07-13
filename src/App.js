import "./App.css";
import { useState } from "react";
import { styled } from "styled-components";
import { nanoid } from "nanoid";

function App() {
  const [todo, setTodo] = useState({
    id: "",
    content: "",
    like: 0,
  });
  // const [likes, setLikes] = useState([0, 0, 0, 0]);
  const [todos, setTodos] = useState([
    { id: nanoid(), content: "리액트 공부하기", like: 0 },
    { id: nanoid(), content: "점심 먹기", like: 0 },
    { id: nanoid(), content: "자바스크립트 공부하기", like: 0 },
    { id: nanoid(), content: "자바스크립트 마스터하기", like: 0 },
  ]);

  const [selected, setSelected] = useState("");
  const [isDark, setIsDark] = useState(true);

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
            });
            console.log(todo);
          }}
        />
        <StButton
          onClick={(event) => {
            event.preventDefault();
            if (todo.content.trim() === "") {
              alert("할 일을 입력해주세요!");
            } else {
              const plusTodo = { ...todo, id: nanoid() };
              setTodos([...todos, plusTodo]);
              setTodo({
                id: "",
                content: "",
              });
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
              <p> 💙 {todo.like}</p>
              <div className="button-set">
                <StButton
                  onClick={() => {
                    const newTodos = todos.filter((td) => {
                      return todo.id !== td.id;
                    });
                    setTodos(newTodos);
                  }}
                >
                  삭제
                </StButton>
                <StButton
                  onClick={() => {
                    console.log(todo.id);
                    const likeUp = todos.map((td) => {
                      if (td.id === todo.id) {
                        return {
                          ...td,
                          like: td.like + 1,
                        };
                      } else {
                        return td;
                      }
                    });
                    setTodos(likeUp);
                  }}
                >
                  좋아요
                </StButton>
              </div>
            </StCard>
          );
        })}
      </div>
      <br />
      <div>
        선택과제
        <select
          onChange={(e) => {
            setSelected(e.target.value);
          }}
        >
          <option>선택하세요</option>
          <option>멋진바지</option>
          <option>간지나는셔츠</option>
          <option>보란색셔츠</option>
        </select>
        <div>{selected}</div>
        <div
          style={{
            backgroundColor: isDark ? "black" : "white",
            color: isDark ? "white" : "black",
          }}
        >
          {isDark ? "다크모드" : "화이트모드"}
        </div>
        <input
          type="checkbox"
          onChange={() => {
            setIsDark(!isDark);
          }}
        />
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

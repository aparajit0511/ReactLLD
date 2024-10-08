import React, { useState } from "react";

function Todo() {
  // show posts
  const [Todos, setTodos] = useState([
    {
      Title: "Go To Gym",
      Description: "Do Legs Workout Today.",
    },
    {
      Title: "Call for that job",
      Description: "Keep a pen and paper handy.",
    },
  ]);

  const [Title, setTitle] = useState("");
  const [Description, setDesc] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  //   const Todos = [
  //     {
  //       Title: "Go To Gym",
  //       Description: "Do Legs Workout Today.",
  //     },
  //     {
  //       Title: "Call for that job",
  //       Description: "Keep a pen and paper handy.",
  //     },
  //   ];

  // add post

  const onTitleHandler = (event) => {
    // console.log(event.target.value);
    setTitle(event.target.value);
  };

  const onDescHandler = (event) => {
    // console.log(event.target.value);
    setDesc(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // setTodos([...Todos, { Title, Description }]);
    if (editIndex !== null) {
      const updatedTodos = Todos.map((todo, index) =>
        index === editIndex ? { Title, Description } : todo
      );
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...Todos, { Title, Description }]);
    }
    setTitle("");
    setDesc("");
  };

  // update post

  const onUpdateHandler = (indexToUpdate) => {
    setTitle(Todos[indexToUpdate].Title);
    setDesc(Todos[indexToUpdate].Description);
    setEditIndex(indexToUpdate);
  };

  // delete post

  const onDeleteHandler = (indexToDelete) => {
    console.log("print");
    setTodos((t) => t.filter((_, index) => index !== indexToDelete));
  };
  return (
    <div>
      <h1>Todo</h1>
      <div>
        <h3>Create A Post</h3>
        <form
          onSubmit={onSubmitHandler}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            placeholder="Type a title"
            onChange={onTitleHandler}
            value={Title}
          ></input>
          <input
            type="text"
            placeholder="Type a description"
            style={{ height: "80px" }}
            onChange={onDescHandler}
            value={Description}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <h3>Show Todos</h3>
        {Todos.map((result, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "auto",
                backgroundColor: "blanchedalmond",
                marginBottom: "7px",
              }}
            >
              <p>{result.Title}</p>
              <p>{result.Description}</p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <button onClick={() => onDeleteHandler(index)}>Delete</button>
                <button onClick={() => onUpdateHandler(index)}>Update</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todo;

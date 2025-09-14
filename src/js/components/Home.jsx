import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// hoja de ruta
// ya le he dado a tarea el valor del input, => hay que darle a todos el valor de tarea

//create your first component
const Home = () => {
  const [tarea, setTarea] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarTarea();
    setTarea("");
  };

  const recogerTarea = (e) => {
    setTarea(e.target.value);
  };

  const agregarTarea = () => {
    todos.push(tarea);
  };
  const remove = (index) => {
    setTodos(
      todos.filter((_, i) => {
        return i !== index;
      })
    );
  };

  return (
    <>
      <div className="toDoList d-flex flex-column w-auto">
        <div className="text-center">
          <label htmlFor="form" className="form-label">
            <h1>To do List</h1>
          </label>
        </div>
        <form
          onSubmit={handleSubmit}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <input
            type="text"
            className="form-control input ps-3"
            id="form"
            value={tarea}
            placeholder="Hoy tengo que..."
            onChange={recogerTarea}
          ></input>
        </form>
        <ul className="p-0 m-0">
          {todos.map((todos, index) => {
            return (
              <div className="row">
                <ul>
                  <li>
                    <div className="col-12 ">
                      <button
                        key={index}
                        onClick={() => {
                          remove(index);
                          console.log(todos);
                        }}
                        className="boton"
                      >
                        <p className="textoDeTarea ps-3 pt-2">{todos}</p>

                        <i className="fa-solid fa-xmark m-2"></i>

                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            );
          })}
        </ul>
      </div>

      <div className="d-flex footer ">
        {todos.length == 0 ? (
          <p>No hay tareas por ahora</p>
        ) : (
          <p>{todos.length} Tareas pendientes.</p>
        )}
      </div>
    </>
  );
};

export default Home;

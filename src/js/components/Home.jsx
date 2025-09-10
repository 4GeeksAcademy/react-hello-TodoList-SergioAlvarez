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
    
      <div className=" d-flex flex-column align-items-center justify-content-center">

          <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center align-items-center">
            <label htmlFor="form" className="form-label">
              To do List
            </label>
            <input
              type="text"
              className="form-control"
              id="form"
              value={tarea}
              placeholder="Hacer la cama"
              onChange={recogerTarea}
            ></input>
          </form>
          <div className="tareas">
            <ul>
              {todos.map((todos, index) => {
                return (
                  <div className="listadoTareas">
                  <li key={index} className="d-flex justify-content-between align-items-center">
                    {todos}
                    <button
                      onClick={() => {
                        remove(index);
                        console.log(todos);
                      }}
                    className="boton">
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </li>
                  </div>
                );

              })}
            </ul>
          </div>
          
          <div>
            {todos.length == 0 ? 
          <p>No hay tareas por ahora</p>  
          :
          <p>{todos.length}</p>
          }
          </div>
        </div>
        
    </>
  );
};

export default Home;

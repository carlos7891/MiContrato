import React, { useState, useEffect } from "react";
import * as api from "../api";

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [pagina, setPagina] = useState(1);
  const listUsuarios = async () => {
    try {
      const res = await api.ListaUsuarios(pagina);
      setUsuarios(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    listUsuarios();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagina]);

  const anterior = async () => {
    if (pagina > 1) {
      setPagina(pagina - 1);
    }
  };
  const siguiente = async () => {
    if (pagina < 10) {
      setPagina(pagina + 1);
    }
  };

  return (
    <div className="flex flex-col items-center w-9/12 m-auto mt-5">
      <h2 className="font-bold text-2xl mb-4 text-gray-700 flex">
        Todos los usuarios
      </h2>
      <ul className="list-group">
        {usuarios.map((user) => (
          <li className="flex flex-col mb-5 bg-gray-200 rounded-lg  " key={user.id}>
            <div className="flex flex-row">
              <img
                src={user.avatar}
                alt={user.first_name + user.last_name}
                className="shadow rounded-full max-w-full h-auto align-middle border-none"
              />
              <div className="p-5">
                <h5 className="">
                  Name: {user.first_name}
                </h5>
                <h5 className="">
                 Last name: {user.last_name}
                </h5>
                <p>Email: {user.email}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex items-center space-x-1 mt-10">
        <button
          onClick={() => {
            anterior();
          }}
          className={` px-4 py-2 text-gray-500 bg-gray-300 rounded-md  ${
            pagina > 1 ? "hover:bg-indigo-500 hover:text-white" : ""
          } `}
        >
          Anterior
        </button>
        <i className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md">
          {pagina}
        </i>
        <button
          onClick={() => {
            siguiente();
          }}
          className="px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-indigo-500 hover:text-white"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Usuarios;

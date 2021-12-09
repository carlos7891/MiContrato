import React from "react";
import img from "../assets/profilePhoto.jpg";
import { experiences } from "../components/profile";

const Home = () => {
  return (
    <div className="flex flex-col items-center w-9/12 m-auto">
      <div id="aboutme" className="text-gray-700">
        <div className="flex flex-wrap justify-center m-5">
          <div className="w-3/4 md:w-1/3 m-auto">
            <img
              src={img}
              alt="..."
              className="shadow rounded-full max-w-full h-auto align-middle border-none"
            />
          </div>
        </div>
        <h1 className="font-sans font-family:Noto Sans text-3xl md:text-5xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-gray-600 mb-4">
          CARLOS <br />
          ESPINOSA
        </h1>
        <div className="items-center flex flex-col">
          <h3 className="text-base md:text-xl font-semibold  mb-2">
            {" "}
            Junior Developer / Ingeniero{" "}
          </h3>
          <p className="md:w-3/5 pb-3 text-justify ">
            ¡Hola! Soy desarrollador junior, actualmente estoy terminando mis
            estudios en la Misión Tic 2021 en asociación con la universidad de
            Antioquia.
            <br />
            Soy un obsesionado con la tecnología, me gusta siempre estar a la
            vanguardia y aprender diariamente nuevas maneras de lograr cosas.
          </p>
          <p className="md:w-3/5 text-justify ">
            {" "}
            Mis hobbies son ir al gym, escuchar musica, mirar futbol y jugar
            videojuegos.
          </p>
        </div>
        <div className="text-gray-00 flex flex-col items-center pb-5">
          <h1 className="flex justify-center text-lg md:text-2xl font-semibold mt-5 ">
            Eventos Importantes
          </h1>
          <div className="flex flex-wrap">
          {experiences.map(({ title, description, from, to, imagen }, i) => (
            <div className="mt-5 rounded-lg max-w-sm border border-indigo-500 bg-gray-200 border-rounded mr-5 w-1/4">
              <img className="rounded-t-lg" src={imagen} alt="" />
              <div className="p-2 text-gray-800" key={i}>
                <h3 className="font-semibold text-lg tracking-tight mb-2">
                  {title}
                </h3>
                <h4 className="font-semibold text-sm mb-3">
                  {from}-{to}
                </h4>
                <p className="text-sm mb-3  text-justify ">{description}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

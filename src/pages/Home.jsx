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
        <h1 className="font-sans font-family:Noto Sans text-3xl md:text-5xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-gray-600 mb-6">
          CARLOS <br />
          ESPINOSA
        </h1>
        <div className="items-center flex flex-col mb-6">
          <h1 className="text-base md:text-xl font-semibold  mb-3">
            {" "}
            Junior Developer / Ingeniero{" "}
          </h1>
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
        <div className="text-gray-700 flex flex-col items-center pb-5">
          <h1 className="text-base md:text-xl font-semibold  mb-2 ">
            Eventos Importantes
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {experiences.map(({ title, description, from, to, imagen }, i) => (
            <div  key={i} className="mt-5 rounded-lg  bg-gray-100 border-rounded mr-5 shadow-md ">
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
        <div className="mt-2 mb-6 flex flex-col items-center text-gray-700">
            <h1 className="text-base md:text-xl font-semibold mb-6">Futuro</h1>
            <div className="grid grid-cols-3 divide-x-4
                    divide-blue-600 divide-dotted items md:w-10/12">
                <div className="flex flex-col mb-2 text-center">
                    <span className="font-bold">Corto</span>
                    <span className="text-sm">Ingles <br/>Mejorar mi speaking</span>
                </div>
                <div className="flex flex-col mb-2 text-center">
                    <span className="font-bold">Mediano</span>
                    <span className="text-sm">Canada<br/>Viajar.</span>
                </div>
                <div className="flex flex-col mb-2 text-center">
                    <span className="font-bold">Largo</span>
                    <span className="text-sm">Maestria:<br/>Enfocado en TI.</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

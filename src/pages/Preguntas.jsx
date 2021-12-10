import React from "react";

const Preguntas = () => {
  return (
    <div className="flex flex-col items-center w-9/12 m-auto">
      <h2 className="font-bold text-2xl mb-4 text-gray-700 flex mt-5">
        Preguntas
      </h2>
      <div className="flex flex-col items-center w-4/4 md:w-full mb-10">
        <label
          htmlFor="message1"
          className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-400"
        >
          1. ¿Para qué son los software de gestión documental?
        </label>
        <textarea
          id="message1"
          rows="4"
          className="bg-gray-50  border-2  border-gray-300 text-gray-900 focus:outline-none focus:shadow-outline focus:border-indigo-500 sm:text-sm rounded-lg  block w-full p-2"
          defaultValue="La primera necesidad del uso de un software para la gestión documental serial dejar atrás el paradigma del almacenamiento en papel, y crear uno de forma digital y segura. Luego se debe tener en cuenta que tener un almacenamiento local propio supone un gasto en recursos como lo son los servidores y el mantenimiento del mismo además de esto se debe tener en cuenta que la seguridad también estará a cargo de la empresa. Teniendo en cuenta lo anterior existen empresas las cuales brindan este servicio haciéndose cargo de todo el sistema de gestión en una nube la cual se puede acceder desde cualquier lugar, y de la cual su cliente no tendrá que preocuparse."
        ></textarea>
      </div>
      <div className="flex flex-col items-center w-4/4 md:w-full mb-10">
        <label
          htmlFor="message2"
          className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-400"
        >
          2. ¿Qué percibe del proyecto MiContrato?
        </label>
        <textarea
          id="message2"
          rows="4"
          className="bg-gray-50  border-2  border-gray-300 text-gray-900 focus:outline-none focus:shadow-outline focus:border-indigo-500 sm:text-sm rounded-lg  block w-full p-2"
          defaultValue="Me parece que facilita muchos procesos haciéndolos agiles y seguros, en términos de una persona natural podría decir que se encuentran muchos formatos los cuales a veces son de difícil acceso como lo son contratos de compra y venta, arrendamiento etc. Además, facilita el almacenamiento y su búsqueda. En términos de una empresa hablamos que la gestión documental seria mucho mas sencilla volviendo todo digital y sin preocupaciones por la seguridad y el almacenamiento de los mismos."
        ></textarea>
      </div>
      <div className="flex flex-col items-center w-4/4 md:w-full mb-10">
        <label
          htmlFor="message3"
          className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-400"
        >
          3. ¿Qué es una prueba unitaria, que tipos de pruebas se realizan al
          frontend?
        </label>
        <textarea
          id="message3"
          rows="4"
          className="bg-gray-50  border-2  border-gray-300 text-gray-900 focus:outline-none focus:shadow-outline focus:border-indigo-500 sm:text-sm rounded-lg  block w-full p-2"
          defaultValue="Pruebas Unitarias: Se pueden hacer a cualquier componente o hook, se hace introduciendo un valor esperado y se revisara si el valor entregado es igual al esperado.
          Pruebas manuales: Son cuando la persona prueba los elementos en la página por sí mismo.
          Pruebas Estáticas: Se usan con Typescript para fijarnos que todas las variables tengan el tipado requerido durante todo el proceso.
          Pruebas de Integración:  corremos front y back al mismo tiempo y observamos si trabajan en armonía es decir que la comunicación entre ambos sea idónea.
          Pruebas end-to-end:  Se hacen verificando cada historia de usuario para verificar si se cumplen."
        ></textarea>
      </div>
      <div className="flex flex-col items-center w-4/4 md:w-full mb-10">
        <label
          htmlFor="message4"
          className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-400"
        >
          4. Explicar al menos un método de consumo de servicios rest de forma
          segura.
        </label>
        <textarea
          id="message4"
          rows="4"
          className="bg-gray-50  border-2  border-gray-300 text-gray-900 focus:outline-none focus:shadow-outline focus:border-indigo-500 sm:text-sm rounded-lg  block w-full p-2"
          placeholder="Leave a comment..."
        ></textarea>
      </div>
    </div>
  );
};

export default Preguntas;

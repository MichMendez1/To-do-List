"use client"
import { useState } from "react";
import Formulario from "@/components/Fomulario";
import Lista from "@/components/Lista";
import '../styles/global.css'


export default function Home() {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    console.log('Añadiendo tarea:', tarea);
    setTareas([...tareas, { id: Date.now(), texto: tarea, completado: false }]);
    console.log('Estado de tareas actualizado:', tareas);
  };

  const alternarTarea = (id) => {
    setTareas(tareas.map(tarea =>
      tarea.id === id ? { ...tarea, completado: !tarea.completado } : tarea
    ));
  };

  const quitarTarea = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center" >
      <h1 className="text-3xl font-bold mt-10 mb-5 text-gray-800" >Lista de Pendientes</h1>
      <div className="w-full max-w-md px-4" >
        <Formulario agregarTarea={agregarTarea} />
        <Lista tareas={tareas} alternarTarea={alternarTarea} quitarTarea={quitarTarea} />
      </div>
    </div>
  );
};

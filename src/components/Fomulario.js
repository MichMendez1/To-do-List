import { useState } from "react";
import '../styles/global.css';

export default function Formulario({ agregarTarea }) {

    const [input, setInput] = useState('');

    const handleSumit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            console.log('Enviando tarea:', input);
            agregarTarea(input.trim());
            setInput('');
        }
    };

    return (
        <form
            onSubmit={handleSumit}
            className="flex items-center justify-between gap-2 mb-4"
        >
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Nueva Tarea"
                className="flex-grow p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Agregar
            </button>

        </form>
    );

};
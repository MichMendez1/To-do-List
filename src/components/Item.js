import '../styles/global.css'

export default function Item({ tarea, alternarTarea, quitarTarea }) {
    return (
        <li
            key={tarea.id}
            className='flex items-center gap-x-4 p-2 bg-gray-100 rounded-md'
        >
            <span
                className={`flex-grow ${tarea.completado ? 'line-through text-gray-500' : ''
                    }`}
            >
                {tarea.texto}
            </span>
            <button onClick={() => alternarTarea(tarea.id)}
                className='px-2 py-1 bg-green-500 text-white text-sm rounded-md hover:bg-green-600'
            >
                {tarea.completado ? 'no completado' : 'completar'}

            </button>
            <button onClick={() => quitarTarea(tarea.id)}
                className='px-2 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600'
            >Eliminar
            </button>
        </li>
    );
};
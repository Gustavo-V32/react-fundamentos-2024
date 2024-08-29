'use client'

import { useState } from 'react';
import Pagina from "../components/pagina";

export default function Contador() {

    // Define um estado para armazenar o valor do contador
    const [count, setCount] = useState(0);

    // Função para incrementar o contador
    const increment = () => {
        setCount(count + 1);
    };

    // Função para decrementar o contador
    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <Pagina titulo="Página de Contador">
            <h1>Contador: {count}</h1>

            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Decrementar</button>
        </Pagina>
    );
}
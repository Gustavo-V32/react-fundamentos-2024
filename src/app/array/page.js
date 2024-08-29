'use client'

import Pagina from "../components/pagina"

export default function array() {

    const carros = ['corsa', 'celta', 'ferrari', 'fusca', 'cobalt']

    return (
            <Pagina titulo="Pagina de Array">
                {carros.map(item=>(
                    <p>{item}</p>
                ))}
            </Pagina>
    )
}
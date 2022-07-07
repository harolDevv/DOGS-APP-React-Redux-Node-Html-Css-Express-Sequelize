import React from 'react';
import {render} from '@testing-library/react'
import Inicio from './components/Inicio'
import {BrowserRouter} from "react-router-dom"

describe('Test Front', () => {
    it('Conteniedo del Boton' , () => {
        const {container} = render(
        <BrowserRouter>
            <Inicio />
        </BrowserRouter>
        );
            expect(container.querySelector("a")).toHaveTextContent("Let's go!");
    });

});                                             
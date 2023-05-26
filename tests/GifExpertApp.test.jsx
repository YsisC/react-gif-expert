import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';


describe('Pruebas en <GifExpertApp />', () => {

    test('debe retornar un arreglo de categorias ', () => {
        
        render( <GifExpertApp /> );
 
        const inputValue = 'Saitama';
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form)

        expect(  screen.getByText('GifExpertApp') )
        expect(  screen.getByText(inputValue) )

    });

});
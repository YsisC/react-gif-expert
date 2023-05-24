import { render, screen } from '@testing-library/react'
import { GifItem } from '../../src/components'
import { clearScreenDown } from 'readline'

describe('Pruebas en <GifItem /> ', () => {
    const title = 'Saitama'
    const url = 'https://one-punch.com/saitama.jpg'

    test('debe hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot()
    })
    test('debe de mostrarc la imagen con el url y el alt indicado', () => {
        render(<GifItem title={title} url={url} />)
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe(url)
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url)
        expect(alt).toBe(title)

    })

    test('debe de mostrar el titulo en el componente', ()=>{
        render(<GifItem title={title} url={url} />)
        expect( screen.getByText(title)).toBeTruthy()
    })

})

import React from 'react';
import { render } from '@testing-library/react';

describe('Home', () => {
    let Home
    let StoreProvider

    beforeAll(() => {
        jest.doMock('../list')
        Home = jest.requireActual('../index').default
        StoreProvider = jest.requireActual('../../../helper/store').StoreProvider
    })

    afterAll(() => {
        jest.dontMock('../list')
    })

    it('page should render properly with feeding data', () => {
        const { container, asFragment } = render(
            <StoreProvider >
                <Home />
            </StoreProvider >
        )

        expect(container.firstChild).toMatchInlineSnapshot(`
            <h1>
              Hey, welcome to home page
            </h1>
        `)
    })
})
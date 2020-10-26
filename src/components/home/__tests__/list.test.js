import React from 'react';
import { render } from '@testing-library/react';
import TestRenderer from 'react-test-renderer'

describe('PostList', () => {
    let PostList

    beforeAll(() => {
        PostList = jest.requireActual('../list').default
    })

    it('should render properly with feeding data with small amount data', () => {
        const renderer = TestRenderer.create(
            <PostList posts={[{ id: 1, title: 'title' }]} />
        )
        expect(renderer.toJSON()).toMatchSnapshot()
    })

    it('should render properly with feeding data with a bit more data', () => {
        const renderer = TestRenderer.create(
            <PostList posts={[
                { id: 1, title: 'title' },
                { id: 2, title: 'title' },
                { id: 3, title: 'title' },
                { id: 4, title: 'title' },
                { id: 5, title: 'title' },
                { id: 6, title: 'title' },
                { id: 7, title: 'title' },
                { id: 8, title: 'title' },
                { id: 9, title: 'title' }
            ]}
            />
        )
        expect(renderer.toJSON()).toMatchSnapshot()
    })
})
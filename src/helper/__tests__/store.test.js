describe('Store', () => {
    const reducer = jest.requireActual('../store').reducer
    const state = { posts: [] }

    it('FETCH_POSTS action should work properly', async () => {
        const newState = reducer(state, { type: 'FETCH_POSTS', payload: [1, 2, 3] })
        expect(newState).toStrictEqual({ "posts": [1, 2, 3] })
    })

    it('ADD_COMMENT action should work properly', async () => {
        const newState = reducer(state, { type: 'ADD_COMMENT', payload: { posts: [1, 2, 3, 4] } })
        expect(newState).toStrictEqual({ "posts": [1, 2, 3, 4] })
    })

    it('REMOVE_COMMENT action should work properly', async () => {
        const newState = reducer(state, { type: 'REMOVE_COMMENT', payload: { posts: [1, 2] } })
        expect(newState).toStrictEqual({ "posts": [1, 2] })
    })
})
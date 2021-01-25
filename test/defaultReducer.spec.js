import defaultReducer from '../src/defaultReducer'

describe('defaultReducer', () => {
  it('returns the "state"', () => {
    const state = {}

    expect(defaultReducer(state)).toBe(state)
  })
})

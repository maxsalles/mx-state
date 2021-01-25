import normalizeOptions from '../src/normalizeOptions'

describe('normalizeOptions', () => {
  it('returns a frozen object and only with the options allowed', () => {
    const options = {
      reducer: state => state,
      triggerDetailedEvents: false,
      nonexistentOption: 'value'
    }

    const normalaized = normalizeOptions(options)

    expect(normalaized).toEqual({
      reducer: options.reducer,
      triggerDetailedEvents: options.triggerDetailedEvents
    })

    expect(Object.isFrozen(normalaized)).toBeTruthy()
  })
})

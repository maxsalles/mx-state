jest.mock('../src/copyAndFreeze')

import { hasMixin } from '@mx-js/mixins'
import EventMixin from '@mx-js/events'

import { STORAGE_PROPERTY } from '../src/constants'
import copyAndFreeze from '../src/copyAndFreeze'
import defaultReducer from '../src/defaultReducer'
import Storage from '../src/Storage'

describe('Storage.constructor', () => {
  const initialState = {}

  beforeEach(() => copyAndFreeze.mockClear())

  it('defines a property containing a frozen copy of "initialState", and default options', () => {
    const copiedAndFrozenInitialState = {}

    copyAndFreeze.mockReturnValue(copiedAndFrozenInitialState)

    const storage = new Storage(initialState)

    expect(storage[STORAGE_PROPERTY].state).toBe(copiedAndFrozenInitialState)

    expect(storage[STORAGE_PROPERTY].options).toEqual({
      reducer: defaultReducer,
      triggerDetailedEvents: false
    })

    expect(copyAndFreeze).toBeCalledWith(initialState)
  })

  it('implements "EventMixin"', () => {
    expect(hasMixin(Storage, EventMixin)).toBeTruthy()
  })

  describe('when less "options" are passed than available', () => {
    it('records past "options" and includes others with their default values', () => {
      const options = { reducer: state => state }
      const storage = new Storage(initialState, options)

      expect(storage[STORAGE_PROPERTY].options).toEqual({
        reducer: options.reducer,
        triggerDetailedEvents: false
      })
    })
  })

  describe('when all available "options" are passed', () => {
    it('records past "options"', () => {
      const options = {
        reducer: state => state,
        triggerDetailedEvents: false
      }

      const storage = new Storage(initialState, options)

      expect(storage[STORAGE_PROPERTY].options).toEqual(options)
    })
  })

  describe('when unot vailable "options" are passed', () => {
    it('discards not vailable "options"', () => {
      const options = {
        reducer: state => state,
        nonexistentOption: 'value'
      }

      const storage = new Storage(initialState, options)

      expect(storage[STORAGE_PROPERTY].options).toEqual({
        reducer: options.reducer,
        triggerDetailedEvents: false
      })
    })
  })
})

import { STORAGE_PROPERTY } from '../src/constants'

describe('constants', () => {
  describe('STORAGE_PROPERTY', () => {
    it('is a "Symbol"', () => {
      expect(typeof STORAGE_PROPERTY).toBe('symbol')
    })
  })
})

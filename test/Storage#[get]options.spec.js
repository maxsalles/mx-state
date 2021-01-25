import { STORAGE_PROPERTY } from '../src/constants'
import Storage from '../src/Storage'

describe('Storage#[get]options', () => {
  it('returns the "options" value', () => {
    const storage = new Storage({})

    expect(storage.options).toBe(storage[STORAGE_PROPERTY].options)
  })
})

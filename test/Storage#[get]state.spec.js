import { STORAGE_PROPERTY } from '../src/constants'
import Storage from '../src/Storage'

describe('Storage#[get]state', () => {
  it('returns the "state" value', () => {
    const storage = new Storage({})

    expect(storage.state).toBe(storage[STORAGE_PROPERTY].state)
  })
})

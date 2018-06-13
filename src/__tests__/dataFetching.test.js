import { getDataForFileId } from '../dataFetching'

describe('Data fetching functions', () => {
  describe('getDataForFileId', () => {
    it('returns a redux action with data', async () => {
      let client = {
        query: jest.fn(opts => ({
          data: { dwellings: { results: [{ foo: 'bar' }] } },
        })),
      }
      const action = await getDataForFileId('1234asdf', client)
      expect(action).toEqual({
        data: { foo: 'bar' },
        type: 'SAVE_FILEID_LOOKUP_RESULTS',
      })
    })

    it('returns an empty object when there are no results', async () => {
      let client = {
        query: jest.fn(opts => ({
          data: { dwellings: { results: [] } },
        })),
      }
      const action = await getDataForFileId('1234asdf', client)
      expect(action).toEqual({
        data: {},
        type: 'SAVE_FILEID_LOOKUP_RESULTS',
      })
    })

    it('handles an errors array returned by the graphql endpoint', async () => {
      let client = {
        query: jest.fn(opts => ({
          errors: [
            {
              locations: [
                {
                  column: 32,
                  line: 5,
                },
              ],
              message: 'your request is bad and you should feel bad',
            },
          ],
        })),
      }
      let action = await getDataForFileId('1234asdf', client)
      expect(action).toEqual({
        data: {},
        type: 'SAVE_FILEID_LOOKUP_RESULTS',
      })
    })
  })
})

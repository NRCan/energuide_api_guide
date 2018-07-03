import 'babel-polyfill'
import { createServer } from './createServer'

const server = createServer()

server.listen(3003, () => {
  console.log('Listening @ http://localhost:3003/') // eslint-disable-line no-console
})

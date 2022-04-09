import { join } from 'path'
import express from 'express'

const app = express()

app.use('/', express.static(join(__dirname, 'dist')))

app.get('/*', (req, res) => {
  return res.sendFile(join(__dirname, 'dist', 'index.html'))
})

app.listen(80)
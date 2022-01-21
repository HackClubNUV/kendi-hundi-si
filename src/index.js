import express from 'express'
const app = express()
const port = 5050

app.get('/', (req, res) => {
  res.send('Kehdi hundi si api banade 🐷')
})

app.listen(port, () => {
  console.log(`Kehndi Hundi si running on port: ${port}`)
})

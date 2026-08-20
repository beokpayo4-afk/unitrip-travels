require('dotenv').config()
const app = require('./src/app')
const { PORT } = require('./src/config/env')

app.listen(PORT, () => {
  console.log(`Unitrip Travels API running on port ${PORT}`)
})

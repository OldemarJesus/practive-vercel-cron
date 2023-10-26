const app = require('./src/app')
const dotenv = require('dotenv')

/**
 * Default config
 */
dotenv.config()
const PORT = process.env.PORT

/**
 * Start server
 */
app.listen(PORT, () => {
    console.log(`Server listening on http://127.0.0.1:${PORT}`)
})
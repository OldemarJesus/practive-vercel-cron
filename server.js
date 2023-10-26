const app = require('./src/app')

/**
 * Default config
 */
const CONFIG = {
    port: 3000
}

/**
 * Start server
 */
app.listen(CONFIG.port, () => {
    console.log(`Server listening on http://127.0.0.1:${CONFIG.port}`)
})
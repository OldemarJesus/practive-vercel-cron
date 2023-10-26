const express = require('express')
const cronRoutes = require('./cron')

/**
 * Defining app
 */
const app = express()

/**
 * Defining routes
 */
app.use('/cron', cronRoutes)

/**
 * Local routes
 */
app.get('/', (_, res) => {
    return res
        .send("server running...")
        .status(200)
})

/**
 * Expose app
 */
module.exports = app
const express = require('express')
const router = express.Router()

router.get('/', (_, res) => {
    const currentTime = new Date()
    return res
        .send({
            message: `running cron at ${currentTime.toUTCString()} ...`
        })
        .status(200)
})

module.exports = router
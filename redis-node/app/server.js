const express = require('express')
const app = express()
const redis = require('redis')
const PORT = process.env.PORT || 4000
const REDIS_HOST = process.env.REDIS_HOST
console.log('redis host is ', REDIS_HOST)
const client = redis.createClient(REDIS_HOST)

client.on('error', (err) => {
  console.log('RedisError:', err)
})

app.get('/', (req, res) => {
  res.status(200).json({
    hello: 'Redis Version is ' + client.server_info.redis_version,
    testing: `If there is any error always run "docker build -t yourname ."`
  })
})

app.listen(PORT, () => {
  console.log(`listening to port *:${PORT}. press ctrl + c to cancel.`)
})

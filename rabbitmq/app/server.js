
const q = 'tasks'

console.log('process.env.RABBITMQ_HOST', process.env.RABBITMQ_HOST)
const amqp = require('amqplib')

function connect () {
  const open = amqp.connect(process.env.RABBITMQ_HOST)

  return open.then((conn) => {
    return conn.createChannel()
  }).catch((err) => {
    // console.log(err)
    return initOpen()
  })
}

// Publisher
connect().then((ch) => {
  return ch.assertQueue(q).then((ok) => {
    return ch.sendToQueue(q, new Buffer('something to do'))
  })
}).catch((err) => {
  console.warn('PublisherError:', err)
})

// Consumer
connect().then((ch) => {
  return ch.assertQueue(q).then((ok) => {
    return ch.consume(q, (msg) => {
      if (msg != null) {
        console.log(msg.content.toString())
        ch.ack(msg)
      }
    })
  })
}).catch((err) => {
  	console.warn('ConsumerError:', err)
})

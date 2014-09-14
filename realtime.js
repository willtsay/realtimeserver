var io = require('socket.io')(process.env.PORT||8080)

io.sockets.on('connection', function(socket){
  socket.on('change:color', function(data){
    io.sockets.emit('change:color', data)
  })
})
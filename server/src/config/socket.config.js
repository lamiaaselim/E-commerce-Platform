const socketIo = require('socket.io');
const productSocketHandler = require('../sockets/product.socket');

module.exports = (server) => {
  const io = socketIo(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE']
    }
  });

  productSocketHandler(io); // Attach event handlers
  return io;
};

module.exports = function(io){
  var coats = io.of('/coats'),
    coatArray = [
      {name: 'Coat'},
      {name: 'Purse'},
      {name: 'Luggage'}
    ];

  coats.on('connection', function(socket){
    socket.on('read', function(data){
      socket.emit('read:result', coatArray);
    });
    socket.on('create', function(data){
      console.log(data);
    });
    socket.on('disconnect', function(){
      console.log('socket disconnected from /coats namespace')
    });

    socket.emit('welcome');
  });
};

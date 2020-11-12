var socket =io();

     	    socket.on('connect', function(){

     		console.log('conectado al server');
     	});

     		socket.on('disconnect', function(){

     		console.log('perdimos conexion al server');
     	});

     		socket.emit('sendMessage',{
     			user: 'jose',
     			message: 'HOLA A TODOS'
     		},function(resp){
     			console.log(resp);
     		})

     		socket.on('sendMessage',(data)=>{
		console.log('que envia el serve',data)
	});
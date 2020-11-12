const {io} = require('../server')
io.on('connection', (client)=>{

	console.log('cliente conectado');

	client.emit('sendMessage',{
     			user: 'ADMIN',
     			message: 'BIENVENIDO A ESTA APP'
     		})


	client.on('disconnect',()=>{

		console.log('usuario desconectado')
	})

	client.on('sendMessage',(data,callback)=>{
		console.log(data)


		client.broadcast.emit('sendMessage',data);

		if(data.user){
			callback({message: 'TODO SALIO BIEN'})
		}else{
			callback({message: 'TODO SALIO MAL!!!!!!!!!'})
		}


	})

})
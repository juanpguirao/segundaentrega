const express = require('express');
const handlebars = require('express-handlebars');
const {Server} = require('socket.io');
const path = require('path');
const usersRoutes = require ('./routes/users.routes')
const petsRoutes = require ('./routes/pets.routes')
const viewRoutes = require ('./routes/views.router');
const homeRoutes = require ('./routes/home.routes')


const PORT = 8080;
const app = express();

// Template Engine
app.engine('handlebars', handlebars.engine());

app.set('views',__dirname + '/views'); // set views directory (plantillas)
app.set('view engine', 'handlebars'); // set view engine to handlebars

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname,'../public')));

//Routes
app.use('/', homeRoutes);
app.use('/api', viewRoutes);
app.use('/api/pets', petsRoutes);
app.use('/api/users', usersRoutes);
//Listen
const httpServer = app.listen( PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

//Servidor Socket
const io = new Server(httpServer);

io.on('connection', (socket)=>{
    console.log("Cliente conectado id:", socket.id);
    
    socket.on('message', (data)=>{
        io.emit('paragraph', data);
    })

    // socket.emit('socketIndividual', 'Bienvenido ')
    // socket.broadcast.emit('todosMenosSocketActual', 'Este mensaje lo reciben todos los clientes menos el actual')
    // io.emit('todos','Este mensaje lo reciben todos')
})

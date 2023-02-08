//Cliente
const socket = io(); //Conexion al socket server => connexion
socket.emit('message', 'Bandeja de mensajes:')
// socket.on('socketIndividual',(data)=>{
//     console.log("individual", data)
// })
// socket.on('todosMenosSocketActual',(data)=>{
//     console.log("todos menos yo", data)
// })
// socket.on('todos',(data)=>{
//     console.log("Todos", data)
// })
const input = document.getElementById('text-imput')
const paragraph = document.getElementById('text-paragraph')

input?.addEventListener('keypress', (event)=>{
    const key = event.key;
    event.target.value = "";
    socket.emit('message', key)
});
socket.on('paragraph', (data)=>{
    paragraph.innerHTML +=data
})
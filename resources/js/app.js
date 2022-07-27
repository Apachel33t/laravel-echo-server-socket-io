import './bootstrap';

window.Echo.channel('chat')
    .listen('Message', e => {
        console.log(e)
    })

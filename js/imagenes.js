let encendido = false

const encender = () => {
    if (encendido) {
        encendido = false
        document.getElementById('imgFoco').src='../img/foco_off.png'
        document.getElementById('btnEncender').innerHTML = 'Encender'
    } else {
        encendido = true
        document.getElementById('imgFoco').src='../img/foco_on.png'
        document.getElementById('btnEncender').innerHTML = 'Apagar'
    }
}
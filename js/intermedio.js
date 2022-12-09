const prueba = () => {
    /**Variables 
     * var/valor: ya no es comun usarla
     * let: sive para asiganar cualquier tipo de variable
     * const: constantes
    */
    var valor = 'Valor'
    let valorSRC = document.getElementById('img1').src
    console.log(valorSRC)
    const IVA = 0.12
    console.log(valor)
    console.log(IVA)
    if(valorSRC.includes('imagen2.jpg')) {

    }

    let dias = ['Lunes', 'Martes', 'Miercoles']
    dias.push('Jueves')
    console.log(dias)

    /**Desestructuracion */
    const diasCompletos = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
    const [dia1,dia2,dia3,dia4,dia5,dias6,dia7,dia8] = diasCompletos;
    console.log(dia5)
    console.log(dia8)

    const diasCompletos2 = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
    const [d1,d2] = diasCompletos;
    console.log(d1)
    console.log(d2)

    /**Manejo de objetos
     * var
     * let
     * const
     */
    const nicolas = {
        cedula: '1727450684',
        nombre: 'Nicolas',
        apellido: 'Carrera',
        edad: 23,
        ciudad: 'Quito'
    }
    console.log(nicolas)
    
    const persona = {
        cedula: '1727450684',
        nombre: 'Nicolas',
        apellido: 'Carrera',
        edad: 23,
        ciudad: 'Quito',
        direccion: {
            calle: 'Av. America',
            numero: 'OE3-56',
            referecnia: 'Frente a la UCE'
        },
        materia:{
            nombre: 'PWEB',
            creditos: 6
        }
    }

    console.log(persona)

    /**Decestructuracion de objetos */
    const {cedula, ciudad} = nicolas
    console.log(cedula)
    console.log(ciudad)

    const {materia} = persona
    console.log(materia)

    const {nombre} = materia
    console.log(nombre)

    const {edad, ciudad1, hobby} = {
        cedula: '1727450684',
        nombre: 'Nicolas',
        apellido: 'Carrera',
        edad: 23,
        ciudad1: 'Quito'
    }
    console.log(edad)
    console.log(ciudad1)
    console.log(hobby)

    let v1 = this.prueba2()
    console.log(v1)
}

const prueba2 = () => {
    console.log('Segunda funcion')
    return 'valor'
}
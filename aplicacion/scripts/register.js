const URL_API = 'https://back-sprint-1-production.up.railway.app/'

class UI {
    constructor(targetID) {
        this.target = document.getElementById(targetID);
    }

    getValue() {
        return this.target.value;
    }
}
//inputs
const name = new UI('name');
const celular = new UI('celular');
const password = new UI('password');
const url = new UI('url');
const frase = new UI('frase');

const form = document.getElementById('form__login');

const handleSubmit = async (e) => {
    e.preventDefault();
    //new object from values
    const newUser = {
        nombre: name.getValue(),
        numero_celular: celular.getValue(),
        password: password.getValue(),
        url_imagen_perfil: url.getValue(),
        info: frase.getValue(),    
    }
    //validations
    for (const key in newUser) {
        const element = newUser[key];
        if (element === '') {
            alert(`Falta llenar el campo ${key}`)
            return;
        }
    }
    //send to back
    try {
        let response = await axios.post(`${URL_API}usuarios`, newUser);
        if (response.status === 201) {
            Swal.fire(
                'Excelente!',
                'Usuario creado con éxito!',
                'success'
            )
        }
    } catch (error) {
        Swal.fire(
            'Oops!',
            'Se ha presentado un error!',
            'error'
        )
    }
}

form.addEventListener('submit', (e) => { handleSubmit(e) })
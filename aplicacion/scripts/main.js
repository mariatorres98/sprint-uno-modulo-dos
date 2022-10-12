const URL_API = 'https://back-sprint-1-production.up.railway.app/'

class UI {
    constructor(targetID) {
        this.target = document.getElementById(targetID);
    }

    getValue() {
        return this.target.value;
    }
}

const celular = new UI('celular');
const password = new UI('password');

const form = document.getElementById('form__login');

const handleSubmit = async (e) => {
    e.preventDefault();
    //new object from values
    const user = {
        celular: celular.getValue(),
        password: password.getValue(),
    }
    console.log(user);
    //validations
    for (const key in user) {
        const element = user[key];
        if (element === '') {
            alert(`Falta llenar el campo ${key}`)
            return;
        }
    }
    //send to back
    try {
        let response = await axios.get(`${URL_API}usuarios?numero_celular=${user.celular}&password=${user.password}`);
        console.log(response);
        if (response.status === 200) {
            Swal.fire(
                'bienvenido!',
                'seccion iniciada con exito!',
                'welcome'
            )
            if (response.data.length) {
                
                //save localStorage session
               
                localStorage.setItem('user', JSON.stringify(response.data[0]))

                location.href = './pages/home.html'
               
            }else {
                Swal.fire(
                    'Oops!',
                    'Usuario o contraseña incorrecta!',
                    'error'
                )
            }
        }
    } catch (error) {
        console.log(error);
        Swal.fire(
            'Oops!',
            'Se ha presentado un error!',
            'error'
        )
    }
}

const validationSession = () => {
    const user = localStorage.getItem('user');
    if (user) {
        location.href = './pages/home.html'
    }
}

validationSession()

form.addEventListener('submit', (e) => { handleSubmit(e) })
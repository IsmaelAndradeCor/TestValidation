const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
    const nombreValue = nombre.value.trim();
    const apellidoValue = apellido.value.trim();
    const emailValue = email.value.trim();
    const telefonoValue = telefono.value.trim();
	
	if(nombreValue === '') {
		setErrorFor(nombre, 'Nombre no puede estar vacio');
	} else {
		setSuccessFor(nombre);
	}
    
    if (apellidoValue === '') {
        setErrorFor(apellido, 'Apellido no puede estar vacio')
    } else {
        setSuccessFor(apellido)
    }

	if(emailValue === '') {
		setErrorFor(email, 'Correo electronico no puede estar vacio');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Correo electronico invalido');
	} else {
		setSuccessFor(email);
    }
    
    if (telefonoValue === '') {
        setErrorFor(telefono, 'Telefono no puede estar vacio')
    } else if (!isTelefono(telefonoValue)) {
        setErrorFor(telefono, 'Telefono invalido')
    } else {
        setSuccessFor(telefono);
    }

}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isTelefono(telefono){
    return  /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(telefono);
}
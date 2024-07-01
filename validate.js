const form = document.getElementById('form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const assunto = document.getElementById('assunto');
const mensagem = document.getElementById('mensagem');
const botao = document.getElementById('botao');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
})

const validateFocusOutInput = () => {
    const nomeValue = nome.value;
    const emailValue = email.value;
    const assuntoValue = assunto.value;
    const mensagemValue = mensagem.value;

    if (nomeValue != '' && emailValue != '' && assuntoValue != '' && mensagemValue != '') {
        botao.disabled = false;
        botao.classList.remove('disabled');
    }
}

nome.addEventListener('focusout', e => {
    validateFocusOutInput();
})

email.addEventListener('focusout', e => {
    validateFocusOutInput();
})

assunto.addEventListener('focusout', e => {
    
    validateFocusOutInput();
})

mensagem.addEventListener('focusout', e => {
    
    validateFocusOutInput();
})

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const validateNome = () => {

    const nomeValue = nome.value.trim();

    if(nomeValue === '') { //verificar se está vazio
        setError(nome, 'O campo do nome não deve ficar em branco ou vazio.');

    } else if (nomeValue.length > 50) { //verificar quantidade de caracteres
        setError(nome, 'O campo do nome deve conter no máximo 50 caracteres.');

    } else {
        setSuccess(nome);
    }
}

const isValidEmail = email => {
 const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
 return re.test(String(email).toLowerCase());
}

const validateEmail = () => {

    const emailValue = email.value.trim();

    if(emailValue === '') { //verificar se está vazio
        setError(email, 'O campo do email não deve ficar em branco ou vazio.');

    } else if (!isValidEmail(emailValue)) { //verificar formato do e-mail
        setError(email, 'Informe um email válido.');

    } else {
        setSuccess(email);
    }
}

const validateAssunto = () => {

    const assuntoValue = assunto.value.trim();

    if(assuntoValue === '') { //verificar se está vazio
        setError(assunto, 'O campo do assunto não deve ficar em branco ou vazio.');

    } else if (assuntoValue.length > 50) { //verificar quantidade de caracteres
        setError(assunto, 'O campo do assunto deve conter no máximo 50 caracteres.');

    } else {
        setSuccess(assunto);
    }
}

const validateMensagem = () => {

    const mensagemValue = mensagem.value.trim();

    if(mensagemValue === '') { //verificar se está vazio
        setError(mensagem, 'O campo da mensagem não deve ficar em branco ou vazio.');

    } else if (mensagemValue.length > 300) { //verificar quantidade de caracteres
        setError(mensagem, 'O campo da mensagem deve conter no máximo 300 caracteres.');

    } else {
        setSuccess(mensagem);
    }
}

const validateInputs = () => {

    validateNome();
    validateEmail();
    validateAssunto();
    validateMensagem();

}
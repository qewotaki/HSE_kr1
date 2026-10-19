// Переключение паспортных данных с русского на английский и обратно.
let english = false;

const button = document.getElementById('changePassport');
button.addEventListener('click', function () {
    english = !english;

    document.getElementById('passportSurname').innerText = english ? 'Ivanov' : 'Иванов';
    document.getElementById('passportName').innerText = english ? 'Ivan' : 'Иван';
    document.getElementById('passportPatronymic').innerText = english ? 'Ivanovich' : 'Иванович';
    document.getElementById('passportSex').innerText = english ? 'Male' : 'Муж';

    // Дата рождения при переключении языка остаётся неизменной.
    button.innerText = english ? 'Вернуть на русский' : 'Перевести на английский';
});

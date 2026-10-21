let english = false;

const button = document.getElementById('changePassport');
button.addEventListener('click', function () {
    english = !english;

    document.getElementById('passportSurname').innerText = english ? 'Snegur' : 'Снегур';
    document.getElementById('passportName').innerText = english ? 'Ekaterina' : 'Екатерина';
    document.getElementById('passportPatronymic').innerText = english ? 'Aleksandrovna' : 'Александровна';
    document.getElementById('passportSex').innerText = english ? 'Female' : 'Жен';

    button.innerText = english ? 'Вернуть на русский' : 'Перевести на английский';
});

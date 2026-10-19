document.getElementById('readDom').addEventListener('click', function () {
    var surname = document.getElementsByTagName('div')[0].innerText;
    var name = document.getElementsByTagName('div')[1].innerText;
    var birth = document.getElementById('passportDate').innerText;
    document.getElementById('domResult').innerText = surname + ' ' + name + ', ' + birth;
    console.log(surname, name, birth);
});

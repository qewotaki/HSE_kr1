document.getElementById('calculate').addEventListener('click', function () {
    var xText = document.getElementById('x').value;
    var yText = document.getElementById('y').value;
    var output = document.getElementById('answer');
    if (xText === '' || yText === '') {
        output.innerText = 'Введите X и Y';
        return;
    }
    var x = Number(xText);
    var y = Number(yText);
    if (x === 0 || y === 0) {
        output.innerText = 'На ноль делить нельзя';
    } else {
        output.innerText = 'Z = ' + 1 / (x * y);
    }
});

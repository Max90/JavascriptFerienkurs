/**
 * Created by max on 15.09.14.
 */

var f = [];
function faculty(n) {
    if (n == 0 || n == 1)
        return 1;
    if (f[n] > 0)
        return f[n];
    return f[n] = faculty(n - 1) * n;
}

alert(faculty(prompt("Geben Sie eine Nummer ein", "")));

var promptArr = [];
do {
    var promptNum = prompt("Geben Sie eine gültige Zahl ein", "");
    promptArr.push(promptNum);
} while (!isNaN(promptNum));

alert(promptArr);
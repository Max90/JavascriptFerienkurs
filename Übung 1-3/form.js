/**
 * Created by max on 16.09.14.
 */

var birthDate;
var tempDate;
document.getElementById("name").focus();
function setLPValue() {
    document.getElementById("lp-output").innerHTML = document.getElementById("lp-input").value;
    if (document.getElementById("lp-input").value < 50)
        document.getElementById("lp-under-min").innerHTML = "Achtung Sie haben unter 50 LP";
    else
        document.getElementById("lp-under-min").innerHTML = ""
}

function isPasswordMatchingAndNotEmpty() {
    var pw = document.getElementById("pw").value;
    var pwc = document.getElementById("pwc").value;
    if (pw == pwc && pw != "" && pwc != "") {
        document.getElementById("pw-output").innerHTML = "";
        return true;
    } else {
        document.getElementById("pw-output").innerHTML = "Die Passwörter stimmen nicht überein";
    }
    return false;
}

function isAgeVerified() {
    birthDate = new Date(document.getElementById("birthday").value);
    tempDate = new Date(birthDate.getFullYear() + 18, birthDate.getMonth(), birthDate.getDate());
    if (tempDate <= new Date()) {
        document.getElementById("age-not-valuable").innerHTML = "";
        return true;
    } else {
        document.getElementById("age-not-valuable").innerHTML = "Sie müssend mind 18 sein";
        return (tempDate <= new Date());
    }
}

function setSubmitClickable() {
    document.getElementById("submit").disabled = false;
}

function isAgeAndPasswordVerified() {
    if (isAgeVerified() && isPasswordMatchingAndNotEmpty())
        setSubmitClickable();
}

$('#submit').on('click', function () {
    convertInputs();
});

function convertInputs() {
    $.each($("input"), function (i, v) {
        $("<span>").text(" - " + v.value).insertBefore(v);
        $("input").hide();
    });
    $(".pw").hide();
    $(".pwc").hide();
}

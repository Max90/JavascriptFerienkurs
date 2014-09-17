/**
 * Created by max on 17.09.14.
 */
function validateInput() {
    var x = $("#x").val();
    var y = $("#y").val();
    var n = $('input[name=range-input]').val();
    $("#range-output").text(n);
    var result = (x - y) / n;
    console.log(result);
}

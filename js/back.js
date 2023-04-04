



function resultado(){
    var input = document.getElementById('input');

    if(isPalindrome(input.value)){
        document.getElementById("resp").innerHTML = '<div class="alert alert-success" id="result" role="alert">É um Palíndromo !</div>' ;
    }
    else{
        document.getElementById("resp").innerHTML = '<div class="alert alert-danger" id="result" role="alert">Não é um Palíndromo !</div>' ;
    }







}


function isPalindrome(s) {
    return s.toString() === s.toString().split("").reverse().join("") ? true : false;
}
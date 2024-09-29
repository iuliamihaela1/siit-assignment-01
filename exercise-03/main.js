function crescator() {
    let nr1 = parseInt(prompt('Primul numar'));
    let nr2 = parseInt(prompt('Al doilea numar'));
    let sir  = '';

    while(nr1 <= nr2) {
        sir += nr1 + ' ' ;
        nr1 ++ ;
    }
    console.log(sir);
    alert(sir);
}
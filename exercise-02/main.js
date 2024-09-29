function divizibil() {
    let numar = parseInt(prompt('Introduceti numarul'))
    if (numar % 3 == 0) {
        console.log('Numarul este divizibil cu 3')
    }
    if (numar % 5 == 0) {
        console.log('Numarul este divizil cu 5')
    }
    if (numar % 3 !== 0 && numar % 5 !== 0) {
        console.log('Numarul nu este divizibil nici cu 3 nici cu 5')
    }
}

function someFn(inicial) {
    let val = inicial;
    return function (inicial2) {
        val += inicial2;
        return val;
    }
}

const adicionar = someFn(1);
console.log('Primeira chamada', adicionar(3));
console.log('Segunda chamada', adicionar(1));
console.log('Terceira chamada', adicionar(5));

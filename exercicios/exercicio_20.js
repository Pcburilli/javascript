function parimp(n) {
    if (n%2 == 0){
        return `O número ${n} é par`
    } else{
        return `O número ${n} é impar.`
    }
}

function fatorial(x){
    let total = x
    if (x == 1){
        return 1
    } else {
        for (let y = x - 1; y > 1; y--) {
        total = total * y
        }
        return total
    }
}

function fatorial2(x){
    if (x == 1){
        return 1
    } else {
        return x * fatorial2(x-1)
    }
}

let res = fatorial(8)
console.log(res)

console.log('////')

let res2 = fatorial2(8)
console.log(res2)
// 5! = 5 x 4 x 3 x 2 x 1
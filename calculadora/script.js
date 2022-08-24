function calcular(){
    let n1 = window.document.getElementById('txtn1')
    let n2 = window.document.getElementById('txtn2')
    let res = window.document.getElementById('res')

num = Number(n1.value)
num2 = Number(n2.value)

if(n1.value.length == 0){
    alert('Inválido!Por favor,digite um número!')
}
else if( fcalc[0].checked){
    let soma = num+num2
    res.innerHTML = `A soma dos dois números é igual a ${soma}`
    
}else if(fcalc[1].checked){
    let sub = num-num2
    res.innerHTML = `${num} - ${num2} = ${num-num2}`
}else if(fcalc[2].checked){
    let mult = num*num2
    res.innerHTML = `${num} x ${num2} = ${num*num2}` 

}else if(fcalc[3].checked){
    let div = num/num2
    res.innerHTML = `A divisão dos dois números será igual a ${div}`
}
}

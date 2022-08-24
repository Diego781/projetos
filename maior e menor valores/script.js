 function verificar (){
    let p1 = window.document.getElementById('txt1')
    let p2 = window.document.getElementById('txt2')
    let p3 = window.document.getElementById('txt3')
    let p4 = window.document.getElementById('txt4')
    let p5 = window.document.getElementById('txt5')
    let res = window.document.getElementById('res')
    let valores = []

    

        if(p1.value.length == 0 && p2.value.length == 0 && p3.value.length == 0 && p4.value.length== 0 && p5.value.length == 0){
            alert('Erro,Digite um valor!')    
        }else{
            valores.push(Number(p1.value),Number(p2.value),Number(p3.value),Number(p4.value),Number(p5.value))
    
            
            let v1 = Number(p1.value)
            let v2 = Number(p2.value)
            let v3 = Number(p3.value)
            let v4 = Number(p4.value)
            let v5 = Number(p5.value)
         
        let maior = valores[0]
        let menor = valores[0]
        for (let pos in valores){
        res.innerHTML = `Você digitou os valores ${[valores]}`
        if(valores[pos]> maior)
        maior = valores[pos]
        if(valores[pos]<menor)
        menor = valores[pos]
        
        
            
    res.innerHMTL = `<p>Você digitou os valores ${valores}</p>`
    res.innerHTML += `<p>O maior valor digitado foi ${maior}</p>`
    res.innerHTML += `O menor valor digitado foi ${menor}`
        }    
}
    }













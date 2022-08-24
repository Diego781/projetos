function verificar(){
    let v = window.document.getElementById('txt1')
    let s = window.document.getElementById('txt2')
    let af = window.document.getElementById('txt3')
    let res = window.document.getElementById('res')
    let vc = Number(v.value)
    let sal = Number(s.value)
    let anofin = Number(af.value)
    let vp = vc/anofin
if(v.value.length == 0 || s.value.length == 0 || af.value.length == 0){
    alert("Erro,digite um valor válido!")
}else if(sal<vp){
        res.innerHTML = `Para pagar uma casa de R$${vc} em ${anofin} anos a prestação será de ${vp} <br>`
        
        res.innerHTML += `Empréstimo Negado!`
    }else if(sal>=vp){
        res.innerHTML = `Para pagar uma casa de ${vc} em ${anofin} anos a prestação será de ${vp}<br>`
        
        let item = document.createElement('option')
        item.text = `Empréstimo pode ser Concebido!`
        res.appendChild(item)
        
    }
}

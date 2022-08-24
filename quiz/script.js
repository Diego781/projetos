function verificar(){
    let r1 = window.document.getElementById('resp1')
    
    if(resp1.value.length == 0 ){
        alert("Digite um valor válido")
    }
    else if(r1 == "Messi"){
    res.innerHTML = `Resposta está correta &#x2705`
    }else{
        res.innerHTML = `Resposta está incorreta &#x274C`
    }}
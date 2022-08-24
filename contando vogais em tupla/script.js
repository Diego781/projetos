 function contar(){
    let pal = window.document.getElementById('pav1')
    let res = window.document.getElementById('res')
    if(pav1.value.length == 0 ){
        alert('Digite um valor válido')
    }
    else{
    
        
        for(letra in pal){
            if(letra in 'aeiou')
        res.innerHTML =  `Na palavra ${pal} temos as vogais ${letra}`
        }
        } 
        }
    
    


    

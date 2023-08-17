

function verificar() {

    var num = document.getElementById ('inum')
    var a = num.value
    var res = document.getElementById ('d1')
   


    if (a <= 0 || a > 100)  
    { alert('ERRO apenas num de 0 a 100')}

    else {
       
        var total = 0;
        var x = [11,27,15]

        
        x.push (a)
        x.sort()// so ordena quando tem a mesma quant d digit
      
        const z = x
        
        
        for (let i = 0; i < z.length; i++) 
        { total += z[i];}
        
        }
        
  
       
        

        var v = x[0]
        var y = x.length
        var h = x[x.length -1]
        
        num.value = ''

        res.innerHTML =('Temos ' + y + ' numeros cadastrados. <br>O valor minimo foi ' +v+ '.<br>O valor maximo foi ' +h+ '.<br>A soma dos valores foi ' + total + '.' ) 
     
        
     
    }
    
      
      
 

    


        /*var a = num.value
       
        var b = [4,3]
        b.push(a)
        b.sort() */
    



       
    

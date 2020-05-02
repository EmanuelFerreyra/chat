
function leerJson(){
    let url = 'json.php';
    let xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {

        let datos = JSON.parse(this.responseText);
        let result = document.getElementById("result");
        console.log(datos);
        
        result.innerHTML += '';
        for( let item of datos ){
            result.innerHTML += `${item.nombre}
                                 -  ${item.localidad}                                                       
                                 telefono: ${item.telefono}   
                                 <br>`
        }
      }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    
}

export {leerJson};
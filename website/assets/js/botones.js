var botones = document.getElementById("password");

botones.addEventListener("eliminar", function (e){
    e.preventDefault();
    console.log("no queremos escuchar a ese man cantar")
    var datos = new FormData(botones);
     console.log (datos)
     console.log(datos.get("usuario"))
     console.log(datos.get("password"))

     fecth ("post.php",{
        method : "POST",
        body: datos 
     })
        .then (res => res.json())
        .then (data => {
            console.log(data)
            if (data === "error"){
                respuesta.innerHTML = `
                <div class = "alert alert-primary" role = "alert">
                    Llena todos los campos 
                <\div>
                `
            }else{
                respuesta.innerHTML = `
                <div class = "alert alert-primary" role = "alert">
                    ${data}
                <\div>
                `
            }
        })

})
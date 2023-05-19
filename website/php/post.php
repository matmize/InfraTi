<? php 
$usuario = $_POST["usuario"];
$pass = $_POST["password"];

if ($usuario === "" || $password === ""){
    echo json_encode("Llena todos los campos");
}else{
    echo json_encode("Correcto : <br> Usuario:".$usuario."<br>Pass:" .$password)
}

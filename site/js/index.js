function logar(event){

    event.preventDefault();

    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if(usuario == 'admin' && senha == 'admin'){
      

        Swal.fire({
            title:'Login realizado!',
            text:'Bem-vindo(a), ' + usuario + '!',
            icon:'success',
            confirmButtomText:'OK'
        }).then(() =>{
            setTimeout(() => {
              location.href="./html/home.html";
            }, 100);
        });
    }

}
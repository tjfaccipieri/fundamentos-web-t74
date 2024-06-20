/* 
  - Tipagem fraca dinamica (inferencia de dados)
  - Case Sensitive (a != A)
  - criação de variaveis
    -- let -> "let it change" -> variavel que pode ter o valor alterado
    -- const -> "contant" -> variavel que não pode ter o valor alterado
    -- var -> "variable" -> variavel que pode ou não ter o valor alterado

    DOM -> Document-Object Model

     buscar elementos pelo nome da Tag (caso tenha mais que um, vai pegar todos)
    window.document.getElementsByTagName(label)
    
    buscar elementos pelo id (encontrou o primeiro, para a busca)
   const campo = window.document.getElementById('nome')
    */

   let nome = document.querySelector("#nome")
   let email = document.querySelector("#email")

  //  console.log(nome);
  //  console.log(email)

  //  Funções no JS == Metodos Java

  // public void validaNome() {}

  function validaNome() {
    if(nome.value.length >= 3){
      nome.style.borderColor = 'green'
    } else {
      nome.style.borderColor = 'red'
    }
  }
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

const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const assunto = document.querySelector('#assunto');
const mapa = document.querySelector('#mapa')

let nomeOk = false;
let emailOk = false;
let mensagemOk = false;

//  console.log(nome);
//  console.log(email)

//  Funções no JS === Metodos Java

// public void validaNome() {}

function validaNome() {
  let txtNome = document.querySelector("#txtNome")

  if (nome.value.length < 3) {
    txtNome.innerHTML = 'Nome muito curto'
    txtNome.style.color = 'red'
    nomeOk = false
  } else {
    txtNome.innerHTML = 'Nome ok'
    txtNome.style.color = 'green'
    nomeOk = true
  }
}

function validaEmail() {
  let txtEmail = document.querySelector('#txtEmail')
  if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
    txtEmail.innerHTML = 'E-mail inválido'
    txtEmail.style.color = 'red'
    emailOk = false
  } else {
    txtEmail.innerHTML = 'E-mail válido'
    txtEmail.style.color = 'green'
    emailOk = true
  }
}

function validaEmail2() {
  // criação do padrão de email, vai aceitar caracteres + @ + caracteres + . + 2 ou 3 caracteres pra finalizar
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  let txtEmail = document.querySelector('#txtEmail')

  // o if será feito de uma forma diferente, verificando se o que a pessoa digitou condiz com o padrão do e-mail (match)
  // caso de certo, e-mail válido, senão, e-mail inválido
  if(email.value.match(regex)) {
    txtEmail.innerHTML = 'E-mail válido'
    txtEmail.style.color = 'green'
    emailOk = true
  } else {
    txtEmail.innerHTML = 'E-mail inválido'
    txtEmail.style.color = 'red'
    emailOk = false
  }
}

function validaAssunto() {
  let txtMsg = document.querySelector('#txtAssunto')
  
  if(assunto.value.length > 100) {
    txtMsg.innerHTML = 'Assunto muito grande, digite no máximo 100 caracteres.'
    txtMsg.style.color = '#d90429'
    mensagemOk = false
  } else {
    txtMsg.innerHTML = assunto.value.length + '/100'
    txtMsg.style.color = '#2b2d42'
    mensagemOk = true
  }
}

function enviarForm(){
  // event.preventDefault()
  if(nomeOk  && emailOk  && mensagemOk ) {
    alert(nome.value + ', mensagem enviada com sucesso, aguarde um contato dos nosso pato chefe por e-mail.')
  } else {
    alert('Por favor, preencha todos os campos corretamente. Nossos patos-zumbis não são videntes e nem gostam de textão')
  }
}

function mapaZoom() {
  mapa.style.aspectRatio = '16/11'
}

function mapaNormal() {
  mapa.style.aspectRatio = '16/9'
}
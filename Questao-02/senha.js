function TestPassword() {
  var valor = document.getElementById('senha').value
  var d = document.getElementById('seguranca')
  ERaz = /[a-z]/
  ERAZ = /[A-Z]/
  ER09 = /[0-9]/
  ERxx = /[@!#$%&*+=?|-]/

  if (valor.length == '') {
    d.innerHTML = '<h4>Digite sua senha!</h4>'
  } else {
    if (valor.length < 5) {
      d.innerHTML =
        "<h4>Seguranca da senha: <font color='red'> Senha fraca, adicione no mínimo 6 caracteres!</font></h4>"
    } else {
      if (
        (valor.length > 7 &&
          valor.search(ERaz) != -1 &&
          valor.search(ERAZ) != -1 &&
          valor.search(ER09) != -1) ||
        (valor.length > 7 &&
          valor.search(ERaz) != -1 &&
          valor.search(ERAZ) != -1 &&
          valor.search(ERxx)) ||
        (valor.length > 7 &&
          valor.search(ERaz) != -1 &&
          valor.search(ERxx) != -1 &&
          valor.search(ER09)) ||
        (valor.length > 7 &&
          valor.search(ERxx) != -1 &&
          valor.search(ERAZ) != -1 &&
          valor.search(ER09))
      ) {
        d.innerHTML =
          "<h4>Seguranca da senha: <font color='green'> Senha forte!</font></h4>"
      } else {
        if (
          (valor.search(ERaz) != -1 && valor.search(ERAZ) != -1) ||
          (valor.search(ERaz) != -1 && valor.search(ER09) != -1) ||
          (valor.search(ERaz) != -1 && valor.search(ERxx) != -1) ||
          (valor.search(ERAZ) != -1 && valor.search(ER09) != -1) ||
          (valor.search(ERAZ) != -1 && valor.search(ERxx) != -1) ||
          (valor.search(ER09) != -1 && valor.search(ERxx) != -1)
        ) {
          d.innerHTML =
            "<h1>Seguranca da senha: <font color='orange'> Segurança Media!</font></h1>"
        } else {
          d.innerHTML =
            "<h4>Seguranca da senha: <font color='red'> Senha fraca, adicione no mínimo 6 caracteres!</font></h4>"
        }
      }
    }
  }
}

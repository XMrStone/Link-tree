function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag image
  const img = document.querySelector("#profile img")

  //subistituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, colocar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "foto de Mayk Brito sorrindo usando oculos escuro e camisa preta, sem barba e fundo azul"
    )
  } else {
    //se nao estiver no light deixar a imagem normal
    img.setAttribute("src", "../assets/avatar.png")
    img.setAttribute(
      "alt",
      "foto de Mayk Brito sorrindo usando oculos e camisa preta, barba e fundo amarelo"
    )
  }
}

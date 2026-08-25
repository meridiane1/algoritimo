const botoes = document.querySelectorAll(".btn-proximo");

botoes.forEach((botao) => {

botao.addEventListener("click", () => {

    const passoAtual = document.querySelector(".passo.ativo");

    const numeroProximo = botao.getAttribute("data-proximo");

    const proximoPasso = document.getElementById(
        "passo-" + numeroProximo
    );

    passoAtual.classList.remove("ativo");

    proximoPasso.classList.add("ativo");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


});
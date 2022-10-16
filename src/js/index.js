/* 

    OBJETIVO - quando clicarmos na aba temos que mostrar o conteúdo da aba foi clicada pelo usuário e escoder o conteúdo da aba anterior

    - passo 1 - pegar os elementos que representam as abas no HTML

    - passo 2 - identificar o clique no elemento selecionado

    - passo 3 - quando o usuário clicar, desmarcar a aba selecionada

    - passo 4 - marcar a aba clicada como selecionado

    - passo 5 - esconder o conteúdo anterior

    - passo 6 - mostar o conteudo da aba selecionada

*/

// passo 1 - pegar os elementos que representam as abas no HTML
const abas = document.querySelectorAll(".aba");
// passo 2 - identificar o clique no elemento selecionado
abas.forEach(aba => {
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")){
            return;
        }

        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)

    });
});

function selecionarAba(aba) {
    // passo 3 - quando o usuário clicar, desmarcar a aba selecionada
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado")

    //passo 4 - marcar a aba clicada como selecionado
    aba.classList.add("selecionado")
}

function mostrarInformacoesDaAba(aba){
            //passo 5 - esconder o conteúdo anterior
            const informacaoSelecionada = document.querySelector(".informacao.selecionado");
            informacaoSelecionada.classList.remove("selecionado");
            
            //passo 6 - mostar o conteudo da aba selecionada
            const idDoelementoDeInformacoesDaAba = `informacao-${aba.id}`
    
            const informacaoASerMostrada = document.getElementById(idDoelementoDeInformacoesDaAba)
            informacaoASerMostrada.classList.add("selecionado")
    
}       
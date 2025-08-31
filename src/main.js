document.addEventListener('DOMContentLoaded', () => {
    const atividadesPendentes = []

    const input = document.getElementById('input__compra');
    const botaoAdicionar = document.getElementById('adicionar__item');
    const textoCta = document.querySelector('.texto__cta');
    const lista = document.querySelector('.lista');




    botaoAdicionar.addEventListener('click', (e) => {
        e.preventDefault();
        adicionarItem();
        criarLista();
    })

    lista.addEventListener('click', (e) => {
        apagarItem(e);
        itemComprado(e);
    })



    function adicionarItem() {
        const inputValue = input.value;
        atividadesPendentes.push(inputValue);
        input.value = '';
        textoCta.style.display = 'none';

    }

    function criarLista() {
        lista.innerHTML = '';
        atividadesPendentes.forEach((item, index) => {
            const li = document.createElement('li');
            li.className = 'lista__item';
            li.innerHTML =
                `
            <div class="info__left">
                <input type="checkbox" class="checkbox__atividade" >
                <span class="texto__lista">${item}</span>
            </div>
            <button type="button" class="btn__excluir" data-index= "${index}" title="excluir">
                🗑️
            </button>        
        `;
            lista.appendChild(li);
        })
    }

    function apagarItem(e) {
        const botaoApagar = e.target.classList.contains('btn__excluir')
        if (botaoApagar) {
            const index = e.target.getAttribute('data-index');
            atividadesPendentes.splice(index, 1);
            criarLista();
            if (atividadesPendentes.length == 0) {
                textoCta.style.display = 'block';
            }
        }
    }

    function itemComprado(e) {
        const checkbox = e.target.classList.contains('checkbox__atividade')
        if(checkbox) {
            const span = e.target.nextElementSibling;
            span.classList.toggle('atividade__completa')
        }
    }
})



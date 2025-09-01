document.addEventListener('DOMContentLoaded', () => {
    const atividadesPendentes = []

    const input = document.getElementById('input__compra');
    const botaoAdicionar = document.getElementById('adicionar__item');
    const textoCta = document.querySelector('.texto__cta');
    const lista = document.querySelector('.lista');

    let indiceEditar = null;




    botaoAdicionar.addEventListener('click', (e) => {
        e.preventDefault();
        if (indiceEditar !== null) {
            atividadesPendentes[indiceEditar] = input.value;
            indiceEditar = null;
            botaoAdicionar.textContent = 'Adicionar item'
        } else {
            adicionarItem();
        }
        criarLista();
        input.value= '';
    })

    lista.addEventListener('click', (e) => {
        apagarItem(e);
        itemComprado(e);
        editarItem(e);
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
            <div class="info__right">
            <button type="button" class="btn__excluir" data-index= "${index}" title="excluir">
                🗑️
            </button>        
            <button type="button" class="btn__editar" data-index= "${index}" title="editar">
                ✏️
            </button>        
            </div>
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
        if (checkbox) {
            const span = e.target.nextElementSibling;
            span.classList.toggle('atividade__completa')
        }
    }

    function editarItem(e) {
        const botaoEditar = e.target.classList.contains('btn__editar')
        if (botaoEditar) {
            indiceEditar = e.target.getAttribute('data-index');
            input.value = atividadesPendentes[indiceEditar];
            botaoAdicionar.textContent = 'Alterar item';
        }
    }
})



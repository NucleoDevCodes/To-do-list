document.addEventListener('DOMContentLoaded', () => {
    let atividadesPendentes = []
    let atividadesCompletas = []

    const input = document.getElementById('input__compra')
    const botao = document.getElementById('adicionar__item')
    const textoCta = document.querySelector('.texto__cta')



    botao.addEventListener('click', (e) => {
        e.preventDefault();
        adicionarItem();
        if (atividadesPendentes.length > 0 || atividadesCompletas.length > 0) {
            textoCta.style.display = 'none';
        }
    })


    function adicionarItem() {
        const inputValue = input.value
        atividadesPendentes.push(inputValue)
        input.value = '';
        console.log(atividadesPendentes)
    }
})



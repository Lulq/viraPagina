iniciaModal = (modalID) => {
        let modal = document.getElementById(modalID)
        if (modal) {
            modal.classList.add('mostrar')
            console.log(modal)
            modal.addEventListener('click', (e) => {
                if (e.target.id == modalID || e.target.className == 'fechar') {
                    modal.classList.remove('mostrar')
                    localStorage.fecharModal = modalID //armazena o evento no localStorage
                }
            })
        }
}
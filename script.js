document.addEventListener('DOMContentLoaded',()=>{
    const btnOpciones=document.getElementById('btnOpciones')
    const opciones=document.getElementById('contenedor-menu')
    const divSecondary=document.getElementById('contenedor-secondary')

    btnOpciones.addEventListener('click',()=>{
        opciones.classList.add('d-block')
        divSecondary.classList.toggle('flex-row')
        divSecondary.classList.add('flex-column')
    })
})
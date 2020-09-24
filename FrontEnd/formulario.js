window.addEventListener('load',()=>{
    const formulario = document.querySelector('#formulario');

    formulario.addEventListener('submit',(event)=>{
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        fetch('http://localhost:3600/api/formAnswer',
        {
            method: 'POST',
            body: formData,
            mode: 'no-cors'
        }
        ).then(()=>{
            window.location.href = './final.html'
        })

    })
})

 






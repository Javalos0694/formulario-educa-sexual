window.addEventListener('load',()=>{
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit',(event)=>{
        event.preventDefault();
        const formData = new FormData(formulario);

        fetch('http://localhost:3600/api/formAnswer',
        {
            method: 'POST',
            body: formData,
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then(()=>{
            window.location.href = './final.html'
        })

    })

    //Adaptando los text area a responsive
    let arrayTextArea = document.querySelectorAll('.adaptable');
    
    window.addEventListener('resize',()=>{
        let screenSize = window.innerWidth;
        console.log('ejecuta')
        arrayTextArea.forEach(elemento => {
            if(screenSize>=577  && screenSize<=992){
                elemento.setAttribute('rows',3)
            }
            else if(screenSize<=576){
                elemento.setAttribute('rows',2)  
            }
            else{
                elemento.setAttribute('rows',5)
            }
        })
    })

    
})

 






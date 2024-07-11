//template_aovybpf
//service_q85rw3s
//ZkxiKYqp_oG_f2st



function contact(event) {
    event.preventDefault();

    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');

    loading.classList.add ('modal__overlay--visable');
    success.classList.remove ('modal__overlay--success');

    emailjs
      .sendForm(
        'service_9dd0im8',
        'template_aovybpf',
        event.target,
        'ZkxiKYqp_oG_f2st'
    )
    
    .then(()=> {
    loading.classList.remove('modal__overlay--visable');
    success.classList.add('modal__overlay--visable');
    })

    .catch (()=> {
        loading.classList.remove('modal__overlay--visable')
        alert("The email service is temporarily unavailable. Please contact me directly at tas57atx@gmail.com")
    });
}

//function toggleModal() {}
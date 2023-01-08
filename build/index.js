   function contact (event) {
       event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
      emailjs
      .sendForm(
        "service_zrez7qu",
        "template_4uhszof",
       event.target,
       "EJt8uIbeycLVGq2cN"       
   ).then(() => {
    loading.classList.remove("modal__overlay--visible")
    success.classList += " modal__overlay--visible"
   }).catch(() => {
    loading.classList.remove("modal__overlay--visible")
    alert("The email servers are temporarily unavailable. Please contact me directly on antonmariusiulian2005@gmail.com")
   })
}
let isModalOpen = false
function toggleModal () {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open")
        
        
    }
    isModalOpen = true
    document.body.classList += (" modal--open")
}

let nighttoggle = false
function nightMode () {
    nighttoggle = !nighttoggle
    if (nighttoggle) {

        return document.body.classList += (" night")
    }
    else {
        document.body.classList.remove("night")
    }
}
function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX / 20
    const y = event.clientY / 20
    for (let i = 0; i<shapes.length ; ++i) {
        const IsOdd = i % 2 !== 0
        const oddInteger = IsOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * oddInteger}px, ${y * oddInteger}px)`
    }
}
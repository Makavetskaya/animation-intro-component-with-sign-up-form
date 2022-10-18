

const animatiomForm = ()=>{
    const arrows = document.querySelectorAll('.fa-arrow-down')
    arrows.forEach(arrow =>{
        arrow.addEventListener('click', ()=>{
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement; 
            const nextElem = parent.nextElementSibling;
            // console.log(nextElem)
            if( input.type === 'text' && validationName(input)){
                console.log('next')
                nextElemnt(parent,nextElem)
            }
            if( input.type === 'email' && validationName(input)){
                console.log('next')
                nextElemnt(parent,nextElem)
            }
            

        })
    })

}

const validationName = (name)=>{
    if(name.value === '' || name.value.length < 3){
        changeBackgroundError()
    }else{
        changeBackgroundValid()
        return true
    }

}
const validationEmail = (email)=>{
    let reg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    if(email.value === '' || email.test(reg)){
        changeBackgroundError()
    }else{
        changeBackgroundValid()
        return true
    }

}

const changeBackgroundError = ()=>{
    document.body.style.backgroundColor = 'rgb(239, 103, 103)'

}
const changeBackgroundValid = ()=>{
    document.body.style.backgroundColor = 'rgb(100, 194, 128)'

}


const nextElemnt = (parent, nextElem)=>{
    parent.classList.add('inactive');
    nextElem.classList.remove('inactive')

}
animatiomForm()



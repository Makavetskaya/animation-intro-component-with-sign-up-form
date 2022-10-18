

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
            } else if( input.type === 'email' && validationEmail(input)){
                console.log('next')
                nextElemnt(parent,nextElem)
            } else if( input.type === 'password' && validationPassword(input)){
                console.log('next')
                nextElemnt(parent,nextElem)
            }else if( input.name === 'confirmpassword' && validationPasswordConfirm(input)){
                console.log('next')
                nextElemnt(parent,nextElem)
            }
            

        })
    })

}

const validationName = (name)=>{
    if(name.value === ''){
        changeBackgroundError()
        errorMessage("Can't be blank")
    }else if(name.value.length < 3){
        changeBackgroundError()
        errorMessage("Invalid name, please enter at least 3 characters")
    }else{
        changeBackgroundValid()
        errorMessage('')
        return true
    }
    
}

const validationEmail = (email)=>{
    let reg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    if(email.value === ''){
        changeBackgroundError()
        errorMessage("Can't be blank")
    }else if(!reg.test(email.value)){
        changeBackgroundError()
        errorMessage("Invalid email")
    }else{
        changeBackgroundValid()
        errorMessage('')
        return true
    }

}

const validationPassword = (pass)=>{
    let reg = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/
    if(pass.value === ''){
        changeBackgroundError()
        errorMessage("Can't be blank")
    }else if(!reg.test(pass.value)){
        changeBackgroundError()
        errorMessage("Password must have at least 8 characters of uppercase, lowercase letters, numbers and symbols")
    }else{
        changeBackgroundValid()
        errorMessage('')
        return true
    }

}

const validationPasswordConfirm = (pass)=>{
    const passCnfr = document.getElementsByName('confirmpassword');
    if(pass.value === ''){
        changeBackgroundError()
        errorMessage("Can't be blank")
    }else if(pass.value !== passCnfr.value){
        changeBackgroundError()
        errorMessage("Passwords do not match")
    }else{
        changeBackgroundValid()
        return true
    }

}
const errorMessage =(message)=>{
  const error = document.querySelectorAll('.error')
  error.forEach(el => el.textContent = message)
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



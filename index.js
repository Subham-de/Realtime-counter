const textarea = document.getElementById('textarea')
const totalcounter = document.getElementById('total-counter')
const remainingcounter = document.getElementById('Remaining-counter')


updateCounter()

textarea.addEventListener('keyup',()=>{
    updateCounter()
})

function updateCounter(){
    totalcounter.innerText = textarea.value.length
    remainingcounter.innerText=textarea.getAttribute('maxlength')-textarea.value.length
}
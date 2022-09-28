const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
let timerTimeOut
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)

function resetControls()  {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonStop.classList.add('hide')
    buttonSet.classList.remove('hide')
}

function updateTimerDisplay(minutes, seconds){
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
    
}

function resetTimer(){
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)

}

function countdown(){
    timerTimeOut = setTimeout(() => {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)
        

        updateTimerDisplay(minutes, 0)


        if (minutes <= 0){
            resetControls()
            return
        }


        if (seconds <= 0 ){
            seconds = 6
            --minutes
        }

        updateTimerDisplay( minutes, String(seconds - 1))

        countdown()
    }, 1000 )
}

buttonPlay.addEventListener('click', () => {
    buttonPlay.classList.toggle('hide')
    buttonPause.classList.toggle('hide')
    buttonStop.classList.remove('hide')
    buttonSet.classList.add('hide')

    countdown()
});

buttonPause.addEventListener('click', () => {
    buttonPlay.classList.toggle('hide')
    buttonPause.classList.toggle('hide')
    clearTimeout(timerTimeOut)
});

buttonStop.addEventListener('click', ()=> {
    
    resetControls()
    resetTimer()
});

buttonSoundOn.addEventListener('click', () => {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
} )

buttonSoundOff.addEventListener('click', () => {
    buttonSoundOff.classList.add('hide')
    buttonSoundOn.classList.remove('hide')
} )

buttonSet.addEventListener('click', () => {
    let newMinutes = prompt('Quantos minutos ?')
    if (!newMinutes){
        resetTimer()
        return
    }

    minutes = newMinutes

    updateTimerDisplay(minutes, 0)
})


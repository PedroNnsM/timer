import Controls from './controls.js'
import  Timer  from './timer.js'

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)

const controls = Controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop,
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
    minutes
})

buttonPlay.addEventListener('click', () => {
    controls.play()
    timer.countdown()
});

buttonPause.addEventListener('click', () => {
    controls.pause()
    timer.hold()
});

buttonStop.addEventListener('click', ()=> {
    
    controls.reset()
    timer.reset()
});

buttonSoundOn.addEventListener('click', () => {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
} )

buttonSoundOff.addEventListener('click', () => {
    buttonSoundOff.classList.add('hide')
    buttonSoundOn.classList.remove('hide')
} )

buttonSet.addEventListener( 'click', () => {
    let newMinutes = controls.getMinutes()

    if (!newMinutes){
        timer.reset()
        return
    }

    minutes = newMinutes
    timer.updateDisplay(minutes, 0)
    timer.updateMinutes(minutes)
})


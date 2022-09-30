export default function Controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop
}){

    function play(){
        buttonPlay.classList.toggle('hide')
        buttonPause.classList.toggle('hide')
        buttonStop.classList.remove('hide')
        buttonSet.classList.add('hide')
    }

    function pause(){
        buttonPlay.classList.toggle('hide')
        buttonPause.classList.toggle('hide')
    }
    
   
    function reset()  {
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
        buttonStop.classList.add('hide')
        buttonSet.classList.remove('hide') 
    }

    function getMinutes(){
        let newMinutes = prompt('Quantos minutos ?')
        if (!newMinutes) {
            return false
        }  
    }
        
    return {
        reset,
        play,
        pause,
        getMinutes
        
    }
}
const adviceTitle= document.getElementById("advice-title");
const adviceText = document.getElementById("advice-text");
const controls = document.getElementById("control-button");

controls.addEventListener('click',() => {

    const fetchAdvice = async() => {
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json()
    
        adviceTitle.innerHTML = `ADVICE #${data.slip.id}`;
        adviceText.innerHTML = `${data.slip.advice}`;
        console.log(data);
    }
    
    fetchAdvice()
})



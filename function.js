function nextScreen(current, next){
  document.getElementById(current).classList.add("hidden");
  document.getElementById(next).classList.remove("hidden");
}

function startLove(){
  nextScreen('screen2','screen3');

  let text = [
    "Processing Your Answer...",
    "Checking Compatibility...",
    "Calculating Love Percentage...",
    "Result: 1000000% Match Found ❤️"
  ];

  let i = 0;
  let processing = document.getElementById("processingText");

  function typeLine(){
    if(i < text.length){
      processing.innerHTML = text[i];
      i++;
      setTimeout(typeLine, 1500);
    } else {
      setTimeout(()=>{
        nextScreen('screen3','screen4');
        typeLoveMessage();
      },1000);
    }
  }

  typeLine();
}


function typeLoveMessage(){
  let message = "I Knew You’d Say Yes…<br>Because You Are My Safest Place,<br>My Answered Prayer,<br>And My Forever❤️";
  let i = 0;
  let speed = 50;
  let loveText = document.getElementById("loveMessage");

  function type(){
    if(i < message.length){
      // Check for <br> sequence
      if(message.substring(i, i+4) === "<br>"){
        loveText.innerHTML += "<br>";
        i += 4; // skip <br>
      } else {
        loveText.innerHTML += message.charAt(i);
        i++;
      }
      setTimeout(type, speed);
    }
  }

  type();
}

function showFinal(){
  nextScreen('screen4','screen5');
  createConfetti();
}

function createConfetti(){
  for(let i=0; i<100; i++){
    let confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = 
      ["#ff4d6d","#ff8fab","#c9184a","#ffb3c6"][Math.floor(Math.random()*4)];
    confetti.style.animationDuration = (Math.random()*2+2)+"s";
    document.body.appendChild(confetti);
  }
}


function showLetter(){
  nextScreen('screen11','finalLetter');


  let text = "From Your Future Wife, Zahra 💖";
  let i = 0;
  let speed = 80;
  let area = document.getElementById("handwritten");

  function type(){
    if(i < text.length){
      area.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      createConfetti();
    }
  }

  type();
}

document.addEventListener('click', () => {
  const audio = document.getElementById('myAudio');

  // Audio start time ko 55 seconds set karo
  audio.currentTime = 73; 
  audio.play();

}, { once: true }); // sirf pehli click par chalega (browser autoplay policy)






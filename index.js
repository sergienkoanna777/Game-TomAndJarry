const video = document.querySelector(".myvideo");
const text = document.querySelector("h2");

const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two");

buttonOne.addEventListener('click', yesTomate);
buttonTwo.addEventListener('click', nonTomate);

function yesTomate(){
    video.setAttribute("src", "https://cdn.glitch.global/902d295a-5795-4bcc-8e34-e24976509a12/yes%20and%20dog.mp4?v=1651877304643");
    text.innerHTML = "Oops... It must be annoying...";
    buttonOne.textContent = "Spike will fall down";
    buttonTwo.textContent = "Spike will hang in the air...";
    buttonOne.addEventListener('click', spikeDown);
    buttonTwo.addEventListener('click', fishing);

}


function spikeDown(){
    video.setAttribute("src", "https://cdn.glitch.global/902d295a-5795-4bcc-8e34-e24976509a12/Can%20dog%20catch.mp4?v=1651877950096");
    text.innerHTML = "Can Spake catch Tom?";
    buttonOne.textContent = "Yes";
    buttonTwo.textContent = "Non";
    buttonOne.addEventListener('click', poorTom);
    buttonTwo.addEventListener('click', poorSpike);
}



function poorTom(){
    video.setAttribute("src", "https://cdn.glitch.global/902d295a-5795-4bcc-8e34-e24976509a12/Tom%20was%20catch.mp4?v=1651878234023");
    text.innerHTML = "Poor Tom...";
    buttonOne.textContent = "Play again";
    buttonTwo.style = "display: none";
    buttonOne.addEventListener('click', newPlay);
    
}

function newPlay(){
    window.location.reload();
}

function poorSpike(){
    video.setAttribute("src", "https://cdn.glitch.global/902d295a-5795-4bcc-8e34-e24976509a12/dog%20cant.mp4?v=1652132309109");
    text.innerHTML = "Poor Spike...";
    buttonOne.textContent = "Play again";
    buttonTwo.style = "display: none";
    buttonOne.addEventListener('click', newPlay);
    
}


function fishing(){
    video.setAttribute("src", "https://cdn.glitch.global/902d295a-5795-4bcc-8e34-e24976509a12/Fishing.mp4?v=1652132830219");
    text.innerHTML = "Tom is a prankster";
    buttonOne.textContent = "Tom will catch a big fish or vice versa...";
    buttonTwo.textContent = "What Tom catches will be a big surprise for him...";
    buttonOne.addEventListener('click', fish);
    buttonTwo.addEventListener('click', surprise);
}

function fish(){
    video.setAttribute("src", "https://cdn.glitch.global/902d295a-5795-4bcc-8e34-e24976509a12/fish.mp4?v=1652133568758");
    text.innerHTML = "Oh yes, it's a big fish! Tom be careful...";
    buttonOne.textContent = "Play again";
    buttonTwo.style = "display: none";
    buttonOne.addEventListener('click', newPlay);
    
}

function surprise(){
    video.setAttribute("src", "https://cdn.glitch.me/902d295a-5795-4bcc-8e34-e24976509a12/Surprise.mp4?v=1652133752192");
    text.innerHTML = "Tom, run away!";
    buttonOne.textContent = "Play again";
    buttonTwo.style = "display: none";
    buttonOne.addEventListener('click', newPlay);
    
}


function nonTomate(){
    video.setAttribute("src", "https://cdn.glitch.global/902d295a-5795-4bcc-8e34-e24976509a12/non%20and%20sleep.mp4?v=1652202739714");
    text.innerHTML = "Tom is very dexterous, however";
    buttonOne.textContent = "Tom will have a new green friend";
    buttonTwo.textContent = "Tom suddenly flies away...";
    buttonOne.addEventListener('click', frog);
    buttonTwo.addEventListener('click', fly);

}


function frog(){
    video.setAttribute("src", "https://cdn.glitch.global/902d295a-5795-4bcc-8e34-e24976509a12/frog%20and%20love.mp4?v=1652203166413");
    text.innerHTML = "Tom seems to be in love...";
    buttonOne.textContent = "She will love him back";
    buttonTwo.textContent = "Tom will surprise her very much";
    buttonOne.addEventListener('click', sheLoves);
    buttonTwo.addEventListener('click', spikeLoves);

}

function sheLoves(){
    video.setAttribute("src", "https://cdn.glitch.global/902d295a-5795-4bcc-8e34-e24976509a12/Her%20kiss.mp4?v=1652204133671");
    text.innerHTML = "Tom is happy!!!";
    buttonOne.textContent = "Play again";
    buttonTwo.style = "display: none";
    buttonOne.addEventListener('click', newPlay);
    
}

function spikeLoves(){
    video.setAttribute("src", "https://cdn.glitch.global/902d295a-5795-4bcc-8e34-e24976509a12/Tom%20kisses.mp4?v=1652204146103");
    text.innerHTML = "To everyone's surprise...";
    buttonOne.textContent = "Play again";
    buttonTwo.style = "display: none";
    buttonOne.addEventListener('click', yesTomate );
    buttonOne.addEventListener('click', newPlay);
}



function fly(){
    video.setAttribute("src", "https://cdn.glitch.me/902d295a-5795-4bcc-8e34-e24976509a12/Tom%20fly.mp4?v=1652203223502");
    text.innerHTML = "You flew well! But then you made a mistake...";
    buttonOne.textContent = "Tom was promoted...";
    buttonTwo.textContent = "Spike will be fooled...";
    buttonOne.addEventListener('click', teacher);
    buttonTwo.addEventListener('click', donkey);

}

function teacher(){
    video.setAttribute("src", "https://cdn.glitch.global/902d295a-5795-4bcc-8e34-e24976509a12/teacher%20Tom.mp4?v=1652205828233");
    text.innerHTML = "Congratulations on your promotion!!";
    buttonOne.textContent = "Play again";
    buttonTwo.style = "display: none";
    buttonOne.addEventListener('click', newPlay);

}

function donkey(){
    video.setAttribute("src", "https://cdn.glitch.global/902d295a-5795-4bcc-8e34-e24976509a12/Best_Video_Editor_Music_Movie_Maker_20220510180621202.mp4?v=1652220512109");
    text.innerHTML = "Oh Spike, Spike...";
    buttonOne.textContent = "Play again";
    buttonTwo.style = "display: none";
    buttonOne.addEventListener('click', newPlay);
}





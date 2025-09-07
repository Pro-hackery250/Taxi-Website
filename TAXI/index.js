const ShortProfilePhoto = document.querySelector('.img2');
const BigProfilePhoto = document.querySelector('.big');
const HideonScroll = document.querySelector('.hide');
const ALLSECTION = document.querySelector('.all');
const BOTBTN1 = document.querySelector('.bot1');
const robotsBOT1 = document.querySelector('.robots');
const send  = document.getElementById('sendIcon');
const input = document.getElementById('msg');
const chatBox = document.getElementById('chatBox');
const status1 = document.getElementById("status1");

// ai answer

// async function askAI(question) {
//     status1.textContent = "Typing...";
//     addMessage(question, "left1");

//     // Fake delay or call to actual AI
//     let reply = "NDABONA — \n";  // default fallback
//     try {
//         // If using real API:
//         // let resp = await fetch("/api/ai", { method: "POST", body: JSON.stringify({ question }) });
//         // let data = await resp.json();
//         // reply = data.answer;
//         await new Promise(r => setTimeout(r, 1500));
//         reply = "AI reply: " + question.split("").reverse().join("");  // example simulated reply
//     } catch (e) {
//         reply = "Error: could not fetch answer.";
//     }

//     addMessage(reply, "left1");
//     status1.textContent = "Active now";
// }

//     send.onclick = () => {
//       const q = input.value.trim();
//       if (!q) return;
//       input.value = "";
//       askAI(q);
//     };  
  // Send text message
send.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) return;
    addMessage({ text });
    input.value = "";
});

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      send.click();
    }
});

function addMessage(text, side) {
    const msg = document.createElement("div");
    msg.className = "chatbox left1"; // message za user ku ruhande rw'iburyo
    msg.textContent = text;
    msg.innerHTML = `${text}<span class="time">${getTime()}</span>`;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
}

function sendMessage() {
    const text = input.value.trim();
    if (text === "") return;

    const msg = document.createElement("div");
    msg.className = "chatBox right"; // message za user ku ruhande rw'iburyo
    msg.textContent = text;
    chatBox.appendChild(msg);

    // force reflow before adding show class
    setTimeout(() => msg.classList.add("show"), 50);

    chatBox.scrollTop = chatBox.scrollHeight;
    input.value = "";
}

function addMessage({ text = "", image = null, audio = null  }) {
    const msg = document.createElement("div");
    msg.className ="chatbox right";

    if (image) {
      const img = document.createElement("img");
      img.src = image;
      msg.appendChild(img);
    }
      if(audio){
    const audioEl = document.createElement("audio");
    audioEl.controls = true;
    audioEl.src = audio;
    msg.appendChild(audioEl);
    }

    if (text) {
      const divText = document.createElement("div");
      divText.textContent = text;
      msg.appendChild(divText);
    }

    chatBox.appendChild(msg);
    setTimeout(() => msg.classList.add("show"), 50);
    chatBox.scrollTop = chatBox.scrollHeight;
}

send.addEventListener("click", sendMessage);
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        sendMessage();
    }
});


input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && input.value.trim().length > 0) {
        e.preventDefault();
        btn.click();
    }
});


BOTBTN1.addEventListener('click' , () =>{
    robotsBOT1.style.display = 'block';
})
ShortProfilePhoto.addEventListener('click', ()=>{
    BigProfilePhoto.style.display = 'flex';
    BigProfilePhoto.style.transform = 'translate(0)';
});
BigProfilePhoto.addEventListener('click', ()=>{
    BigProfilePhoto.style.display = 'none';
});

window.addEventListener('scroll' ,() =>{
    if(scrollY > 400){
        HideonScroll.classList.add('hider');
        ALLSECTION.style.background = 'white';
    }
    else if(scrollY > 700){
        HideonScroll.classList.add('hider1');
    }
    else{ 
    HideonScroll.classList.remove('hider');
        ALLSECTION.style.background = 'rgba(255, 255, 255, 0.123)';    
    }
});

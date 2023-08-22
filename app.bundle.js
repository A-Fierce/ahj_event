!function(){"use strict";class e{static createModal(){const e=document.querySelector("body"),t=document.createElement("div");t.className="modal-window";const n=document.createElement("p");n.className="modal-text",e.append(t),t.append(n);const o=document.createElement("p");o.className="restart-button",t.append(o),o.textContent="Войти в игру снова"}static showModal(){document.querySelector(".modal-window").style.display="flex"}static hideModal(){document.querySelector(".modal-window").style.display="none"}}new class{constructor(){this.size=4,this.init(this.size)}init(e){const t=document.createElement("div");for(let n=0;n<e*e;n+=1){const e=document.createElement("div");e.className="cell",e.setAttribute("id",n),t.append(e)}t.className="field",document.querySelector("body").append(t),t.style.setProperty("--side",e)}},new class{constructor(){this.createSidePanel(),this.createTimer(),this.createPlayerScore(),this.createGoblinScore()}createSidePanel(){const e=document.querySelector("body"),t=document.createElement("div");t.className="side-panel",e.append(t)}createTimer(){const e=document.querySelector(".side-panel"),t=document.createElement("div");t.className="timer-field",e.append(t);const n=document.createElement("p");n.className="timer",t.append(n),n.textContent=1}createPlayerScore(){const e=document.querySelector(".side-panel"),t=document.createElement("div");t.className="player-score",e.append(t);const n=document.createElement("p");n.className="note",n.textContent="Попадания:",t.append(n);const o=document.createElement("p");o.className="hit-counter",t.append(o),o.textContent=0}createGoblinScore(){const e=document.querySelector(".side-panel"),t=document.createElement("div");t.className="goblin-score",e.append(t);const n=document.createElement("p");n.className="note",n.textContent="Промахи:",t.append(n);const o=document.createElement("p");o.className="goblin-counter",t.append(o),o.textContent=0}},new class{constructor(){this.sureHereWasHit(),this.timeGoesOn(),this.restart(),this.countDown,this.goblinTime}defineGoblinPosition(){const e=document.querySelectorAll(".cell"),t=document.querySelector(".ex-id");let n=999;t&&(n=t.getAttribute("id"),t.classList.remove(".ex-id"));const o=[...e];let c=0;do{c=Math.floor(Math.random()*o.length)}while(c===n);const s=document.getElementById(c);s.classList.add("goblined"),s.classList.add("ex-id")}hideGoblin(){const e=document.querySelector(".goblined");e&&e.classList.remove("goblined")}increasePlayerScore(){const t=document.querySelector(".hit-counter");t.textContent=+t.textContent+1,this.hideGoblin(),clearInterval(this.goblinTime),t.textContent>=5?(clearInterval(this.countDown),e.showModal(),document.querySelector(".modal-text").textContent="Победа"):this.timeGoesOn()}increaseGoblinScore(){const t=document.querySelector(".goblin-counter");t.textContent=+t.textContent+1,this.hideGoblin(),clearInterval(this.goblinTime),t.textContent>=5?(clearInterval(this.countDown),e.showModal(),document.querySelector(".modal-text").textContent="Проигрыш"):this.timeGoesOn()}sureHereWasHit(){document.querySelector(".field").addEventListener("click",(e=>{e.target.classList.contains("goblined")?this.increasePlayerScore():this.increaseGoblinScore()}))}restart(){document.querySelector("body").addEventListener("click",(t=>{t.target.classList.contains("restart-button")&&(e.hideModal(),document.querySelector(".timer").textContent=1,document.querySelector(".hit-counter").textContent=0,document.querySelector(".goblin-counter").textContent=0,this.timeGoesOn())}))}timeGoesOn(){this.countDown&&clearInterval(this.countDown);const e=document.querySelector(".timer");e.classList.remove("goblin-time"),e.textContent=1,this.countDown=setInterval((()=>{+e.textContent>0?e.textContent-=1:+e.textContent<=0&&(this.defineGoblinPosition(),clearInterval(this.countDown),e.classList.add("goblin-time"),e.textContent=1,this.goblinTime=setInterval((()=>{e.textContent>0?e.textContent=(e.textContent-.1).toFixed(1):(clearInterval(this.goblinTime),e.classList.remove("goblin-time"),this.increaseGoblinScore(),this.timeGoesOn())}),100))}),1e3)}},e.createModal()}();
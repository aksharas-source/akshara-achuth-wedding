const wedding=new Date("Aug 23, 2026 00:00:00").getTime();
const t=document.getElementById("timer");
setInterval(()=>{
 const now=Date.now();
 const d= wedding-now;
 if(d<0){t.textContent="Today is the big day!";return;}
 const days=Math.floor(d/86400000);
 const hrs=Math.floor((d%86400000)/3600000);
 const mins=Math.floor((d%3600000)/60000);
 t.textContent=`${days} days ${hrs} hrs ${mins} mins`;
},1000);
function submitRSVP(e){
 e.preventDefault();
 document.getElementById("thanks").textContent="Thank you for celebrating with us! ❤️";
 e.target.reset();
 return false;
}

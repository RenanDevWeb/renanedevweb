const textToWrite=document.querySelector("#me"),textP=document.querySelector("#aboutMe");function writeAndEraseText(e){const t=e.innerHTML,n=t.split("");let i=0;function o(){i<n.length?(e.innerHTML+=n[i],i++,setTimeout(o,75)):setTimeout(r,1e3)}function r(){0<i?(e.innerHTML=e.innerHTML.slice(0,-1),i--,setTimeout(r,50)):setTimeout(o,500)}e.innerHTML="",o()}writeAndEraseText(textToWrite);
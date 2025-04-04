const threshold = 100; // Разница размеров окна при открытии DevTools
let isBlocked = false;

function antiDebug() {
  const widthDiff = window.outerWidth - window.innerWidth;
  const heightDiff = window.outerHeight - window.innerHeight;
  
  if((widthDiff > threshold || heightDiff > threshold) && !isBlocked) {
    isBlocked = true;
    const debugLoop = () => {
      debugger;
      requestAnimationFrame(debugLoop);
    };
    debugLoop();
  }
}

setInterval(antiDebug, 1000);
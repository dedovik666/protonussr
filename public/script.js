// Anti-devtools protection
window.addEventListener('load', () => {
  const threshold = 100; 
  let isBlocked = false;
  let normalWidth = window.outerWidth - window.innerWidth;
  let normalHeight = window.outerHeight - window.innerHeight;

  function detectDevTools() {
    const widthDiff = window.outerWidth - window.innerWidth;
    const heightDiff = window.outerHeight - window.innerHeight;
    
    if(
      (widthDiff > normalWidth + threshold || 
      heightDiff > normalHeight + threshold) && 
      !isBlocked
    ) {
      isBlocked = true;
      activateDebuggerHell();
    }
  }

  function activateDebuggerHell() {
    const debugLoop = () => {
      debugger;
      requestAnimationFrame(debugLoop);
    };
    debugLoop();
    
    
    document.body.innerHTML = '<h1>DevTools заблокированы!</h1>';
    window.addEventListener('keydown', (e) => e.preventDefault());
  }

  setInterval(detectDevTools, 500);
});
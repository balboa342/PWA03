function regSW(){
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
  }
}

// check to see if notifications are supported by this browser
if (!('Notification' in window)) {
  console.log('This browser does not support notifications!');
  return;
}


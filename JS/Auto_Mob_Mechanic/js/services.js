function navToPreventMaintenanceService(){
    location.assign('./preventive-maintenance-service.html');
}

function navToBodyRepairService(){
    location.assign('./body-repair-service.html');
}

function navToCarCareService(){
    location.assign('./car-care-service.html')
}

// function formatMilliseconds(ms) {
//   if (typeof ms !== 'number' || ms < 0) return '0m 0s';

//   const totalSeconds = Math.floor(ms / 1000);
//   const minutes = Math.floor(totalSeconds / 60);
//   const seconds = totalSeconds % 60;

//   return `${minutes}m ${seconds}s`;
// }


// let tenMins = 600000

// const tenMinInterval = setInterval(()=>{
//     document.getElementById('counter').innerText = `${formatMilliseconds(tenMins)}`;
//     // console.log(tenMins, formatMilliseconds(tenMins));
//     tenMins = tenMins - 1000;
//     if(tenMins === 0){
//         clearInterval(tenMinInterval);
//     }
// }, 1000)

function startTenMinuteTimer(onTick, onComplete) {
  const duration = 10 * 60 * 1000; // 10 minutes in milliseconds
  const endTime = new Date().getTime() + duration;

  const timer = setInterval(() => {
    const now = new Date().getTime();
    const remaining = endTime - now;

    if (remaining <= 0) {
      clearInterval(timer);
      onTick(0, 0); // Final call at 0m 0s
      if (onComplete) onComplete();
    } else {
      const totalSeconds = Math.floor(remaining / 1000);
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      onTick(minutes, seconds);
    }
  }, 1000);
}

startTenMinuteTimer(
  (minutes, seconds) => {
    document.getElementById('counter').innerText = `${minutes}m ${seconds}s`;
    // console.log(`${minutes}m ${seconds}s`);
  },
  () => {
    // console.log("Timer complete!");
  }
);

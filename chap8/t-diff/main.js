const timeStart = Date.now();
setInterval(function () {
  const timeNow = Date.now();
  const timeDiff = timeNow - timeStart;
  const sec = timeDiff / 1000; //不足してた
  console.log(`${sec}ミリ秒経ちました`);
}, 100);

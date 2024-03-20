window.addEventListener('DOMContentLoaded', function () {
  const elementStart = this.document.querySelector('#start');
  const elementStop = this.document.querySelector('#stop');

  elementStart.addEventListener('click', function () {
    elementStart.classList.add('hide');
    elementStop.classList.remove('hide');
    const timeStart = Date.now();
    intervalID = setInterval(function () {
      const timeNow = Date.now();
      const timeDiff = timeNow - timeStart;
      const sec = (timeDiff / 1000).toFixed(3);
      document.querySelector('#output').innerHTML = `${sec}秒`;
    }, 1);
  });
  elementStop.addEventListener('click', function () {
    elementStart.classList.remove('hide');
    elementStop.classList.add('hide');

    clearInterval(intervalID);
  });
});

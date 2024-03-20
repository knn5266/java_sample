window.addEventListener('DOMContentLoaded', function () {
  const elementOutput = document.querySelector('#output');

  // 定期処理
  setInterval(function () {
    const date = new Date();
    elementOutput.innerHTML = date.toString();
  }, 10);
});

window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#exec').addEventListener('click', function () {
    const val = document.querySelector('#input1').value;

    // 表示用のHTML文字列を作る
    const html = `私は <b>${val}</b> である。`;

    document.querySelector('#output').innerHTML = html;
  });
});

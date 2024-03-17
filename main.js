window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#exec').addEventListener('click', function () {
    const val = document.querySelector('#input1').value;

    let num = culc(val);
    // 計算
    // let num = Number.parseInt(val); // 数値を得る
    // num = num * 1.1;
    // 1.1を掛ける
    function calc(val) {
      let num = Number.parseInt(val);
      num = num * 1.1;
      return num;
    }

    const html = `<div class="item">税抜き価格 <b>${num}</b> 円</div>`;
    document.querySelector('#output').innerHTML = html;
  });
});

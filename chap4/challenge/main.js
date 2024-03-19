window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#exec').addEventListener('click', function () {
    const total = Number.parseInt(document.querySelector('#inputTotal').value);
    const headcount = Number.parseInt(
      document.querySelector('#inputHeadcount').value
    );
    const elementOutput = document.querySelector('#output');

    // エラーがあればメッセージを表示して終了
    if (total <= 0) {
      elementOutput.innerHTML = '総額が0以下です。';
      return;
    }
    if (headcount <= 0) {
      elementOutput.innerHTML = '人数が0以下です。';
      return;
    }

    // 変数の初期化
    const payment = Math.trunc(total / headcount); // 人数割り
    const remainder = total % headcount; // 端数
    elementOutput.innerHTML = `<div>1人当たり</div><div>${payment}円</div>`;

    // 端数があればメッセージを追加
    if (remainder != 0) {
      elementOutput.innerHTML += `<div>1人だけ端数を加えて</div><div>${
        payment + remainder
      }</div>
      }`;
    }
  });
});

window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#exec').addEventListener('click', function () {
    const arr = ['コーヒー', 'トースト', 'パフェ']; // 配列

    let html = ''; // 表示用のHTML文字列
    for (let i = 0; i < arr.length; i++) {
      html += `<li>「${arr[i]}」</li>`;
    }
    html = `<ul>${html}</ul>`;

    document.querySelector('#output').innerHTML = html;
  });
});

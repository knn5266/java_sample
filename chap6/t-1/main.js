window.addEventListener('DOMContentLoaded', function () {
  // テーブルのデータ部を作成
  let html = '';
  for (let i = 0; i < globalData.length; i++) {
    html += '<tr>';
    for (let j = 0; j < globalData[i].length; j++) {
      html += `<td> 「${globalData[i][j]}」</td>`;
    }
    html += '</tr>';
  }

  document.querySelector('#preview tbody').innerHTML = html;
});

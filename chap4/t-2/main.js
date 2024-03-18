window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#exec').addEventListener('click', function () {
    const val = document.querySelector('#input').value;
    const price = Number.parseInt(val);

    // 価格によって分岐
    let res;
    if (price <= 500) {
      res = `${price}円は安い`;
    } else if (price <= 1000) {
      res = `${price}円は少し高い`;
    } else {
      res = `${price}円は高い`;
    }

    document.querySelector('#output').innerHTML = res;
  });
});

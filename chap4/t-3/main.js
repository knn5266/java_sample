window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#exec').addEventListener('click', function () {
    const val = document.querySelector('#input').value;
    const price = Number.parseInt(val);

    // 価格によって分岐
    let res;
    if (price <= 500) {
      res = `${price}円はOK`;
    } else {
      res = `${price}円は諦める`;
    }

    function getMessage(price) {
      let res;
      if (price <= 500) {
        res = `${price}円はOK`;
      } else {
        res = `${price}円は諦める`;
      }
      return res;
    }
    document.querySelector('#output').innerHTML = res;
  });
});

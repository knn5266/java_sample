const menu = '{"name":"ハンバーグ","price":"1200"}';
try {
  const obj = JSON.parse(menu);
  console.log(obj);
} catch (e) {
  console.log(e);
}

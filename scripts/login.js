var tai_khoan = {
  acc: "hieu123",
  pass: 123456,
};
function account() {
  var _acc = document.querySelector("#acc").value;
  var _pass = document.querySelector("#pass").value;
  console.log(_acc);
  console.log(_pass);
  if (_acc == tai_khoan["acc"] && _pass == tai_khoan["pass"]) {
    document.querySelector("#link").href = "https://www.facebook.com/";
  } else {
    alert("sai tk hoặc mk");
    document.querySelector("#link").href = "";
  }
}

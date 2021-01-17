// Import stylesheets
import "./style.css";

const cookieInfo = document.querySelector(".cookie-info");
const getCookie = () => window.sessionStorage.getItem("cookie");
const setCookie = () => window.sessionStorage.setItem("cookie", "1");
const checkCookieState = cookie => (cookie === "1") && (cookieInfo.style.display = "none");
const delCookieAlert = () => checkCookieState(getCookie());

delCookieAlert();

const setCookieState = cookieInfo.addEventListener("click", e => {

  if (e.target.tagName != "BUTTON") {
    return;
  }

  setCookie();
  delCookieAlert();

});



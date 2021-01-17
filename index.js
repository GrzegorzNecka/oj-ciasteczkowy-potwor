// Import stylesheets
import "./style.css";

const cookieInfo = document.querySelector(".cookie-info");
const getCookie = () => window.localStorage.getItem("cookie");
const setCookie = () => window.localStorage.setItem("cookie", "1");
const delCookieAlert = cookie => {
  if (cookie === "1") {
    cookieInfo.style.display = "none";
  }
};
const checkCookieAlert = () => delCookieAlert(getCookie());

const setCookieState = cookieInfo.addEventListener("click", e => {
  if (e.target.tagName != "BUTTON") {
    return;
  }

  setCookie();
  checkCookieAlert();
});

checkCookieAlert();

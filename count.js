// count.js: counts visits to the pages of rami5743.github.io with GoatCounter
// (no cookies, nothing personal is stored). A page joins with one line:
//
//   <script async src="https://rami5743.github.io/count.js"></script>
//
// Every page is recorded under its own path, without the query string, so
// ?lang=en and ?sort=… count as the same page. The numbers are on the
// GoatCounter dashboard below. To move to another GoatCounter site, change
// ENDPOINT; no page needs to change.
(function () {
  "use strict";
  var ENDPOINT = "https://theonemachine.goatcounter.com/count";
  window.goatcounter = { path: location.pathname || "/" };
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://gc.zgo.at/count.js";
  s.setAttribute("data-goatcounter", ENDPOINT);
  document.head.appendChild(s);
})();

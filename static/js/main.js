window.onload = function () {
  const krwrate = document.getElementById("krw");
  const usdrate = document.getElementById("usd");
  const coinrate = document.getElementById("coin");
  const p = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const p4 = document.createElement("p");
  const p5 = document.createElement("p");
  const p6 = document.createElement("p");
  p.innerHTML = "{{kospiRate}}";
  p2.innerHTML = "{{kospiProfit}}";
  p.className = "mb-0";
  p2.className = "mb-0";
  p3.innerHTML = "{{sp500Rate}}";
  p4.innerHTML = "{{sp500Profit}}";
  p3.className = "mb-0";
  p4.className = "mb-0";
  p5.innerHTML = "{{coinRate}}";
  p6.innerHTML = "{{coinProfit}}";
  p5.className = "mb-0";
  p6.className = "mb-0";
  krwrate.appendChild(p);
  krwrate.appendChild(p2);
  usdrate.appendChild(p3);
  usdrate.appendChild(p4);
  coinrate.appendChild(p5);
  coinrate.appendChild(p6);
};
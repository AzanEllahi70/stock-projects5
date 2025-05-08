const form = document.getElementById("stockForm");
const liveTime = document.getElementById("liveTime");

function updateTime() {
  const now = new Date();
  liveTime.textContent = now.toLocaleString();
}

setInterval(updateTime, 1000);
updateTime();

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const entry = {
    seal: document.getElementById("seal").value,
    item: document.getElementById("item").value,
    flavour: document.getElementById("flavour").value,
    qty: document.getElementById("qty").value,
    weight: document.getElementById("weight").value,
    time: new Date().toLocaleString(),
  };

  let data = JSON.parse(localStorage.getItem("stockInData")) || [];
  data.push(entry);
  localStorage.setItem("stockInData", JSON.stringify(data));

  form.reset();
  window.location.href = "stock-in-table.html";
});

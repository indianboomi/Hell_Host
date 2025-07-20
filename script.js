document.getElementById("add-project").addEventListener("click", function () {
  const name = prompt("Enter project name:");
  const url = prompt("Enter full URL (starting with https://):");
  if (name && url) {
    const ul = document.getElementById("project-list");
    const li = document.createElement("li");
    li.innerHTML = `📁 <a href="${url}" target="_blank">${name}</a>`;
    ul.appendChild(li);
  }
});

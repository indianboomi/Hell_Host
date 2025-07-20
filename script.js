function addProject() {
  const name = document.getElementById('projectName').value.trim();
  if (!name) {
    alert("Please enter a project name.");
    return;
  }

  const list = document.getElementById('projectList');
  const li = document.createElement('li');
  const link = document.createElement('a');
  link.href = `https://yourusername.github.io/${name}`;
  link.target = "_blank";
  link.innerText = `📁 ${name}`;
  li.appendChild(link);
  list.appendChild(li);

  document.getElementById('projectName').value = '';
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!username || !password) return alert("Fill all fields");

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let user = users.find(u => u.username === username);

  if (!user) {
    users.push({ username, password, scores: [] });
    localStorage.setItem("users", JSON.stringify(users));
  }

  localStorage.setItem("currentUser", username);
  window.location.href = "dashboard.html";
}

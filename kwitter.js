function next_page() {
    userName = document.getElementById("user_name").value;
    localStorage.setItem("User Name", userName);
    window.location = "kwitter_room.html";
}
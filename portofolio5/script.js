// ------------------ THEME TOGGLE ------------------
const toggleBtn = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️";
}

toggleBtn.onclick = () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggleBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        toggleBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
};


// ------------------ ACTIVE LINK HIGHLIGHT ------------------
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    const page = link.getAttribute("href"); 
    const current = window.location.pathname.split("/").pop(); 

    if (page === current) {
        link.classList.add("active");
    }
});
/* ===========================
   THEME TOGGLE
=========================== */
const toggleBtn = document.getElementById("themeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️";
}

toggleBtn.onclick = () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggleBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        toggleBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
};


/* ===========================
   ACTIVE LINK DETECTION
=========================== */
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    const page = link.getAttribute("href");
    const current = window.location.pathname.split("/").pop();

    if (page === current) {
        link.classList.add("active");
    }
});

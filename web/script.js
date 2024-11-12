// ================menubar Animation ==================//
document.addEventListener('DOMContentLoaded', () => {
    const menuBar = document.getElementById('menu-bar');
    const navMenu = document.getElementById('nav-menu');
    const overlay = document.querySelector('.overlay');
    const body = document.querySelector('body');
    menuBar.addEventListener('click', () => {
        menuBar.classList.toggle('active');
        navMenu.classList.toggle('active');
        overlay.classList.toggle('active');// làm mờ tầm nhìn :))) //
        body.classList.toggle('no-scroll');// này để khoá cái con lăn lại //
    });
    overlay.addEventListener('click', () => {
        menuBar.classList.remove('active');
        navMenu.classList.remove('active');
        overlay.classList.remove('active'); // ẩn overlay
        body.classList.remove('no-scroll'); // mở cuộn
    });
});

// log in
function login() {
    var name = document.getElementById("user").value;
    var pass = document.getElementById("passer").value;
    if (name == "admin" && pass == "1") {
        // alert("login success");
        window.location.href = "/web/Web-user.html";
        return false;
    } else {
        alert("login failed");
        return false;
    }
}

// che xem password
function checkPassword() {
    var pass = document.getElementById("passer").value;
    if (pass.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    }
}

function show () {
    var x = document.getElementById("passer");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

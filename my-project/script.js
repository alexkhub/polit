document.getElementById('consultationBtn').addEventListener('click', function() {
    alert("Записаться на бесплатную консультацию");
});

function toggleContent() {
    let content = document.getElementById("slideContent");
    let button = document.querySelector(".toggle-btn");
    let icon = document.querySelector(".toggle-btn .icon");
    
    if (content.classList.contains("show")) {
        content.classList.remove("show");
        button.querySelector("span").textContent = "Наш опыт в цифрах";
        icon.textContent = "▼";
    } else {
        content.classList.add("show");
        button.querySelector("span").textContent = "Скрыть";
        icon.textContent = "▲";
    }
}


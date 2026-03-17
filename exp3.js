let fontSize = 16;

function changeHeading() {
    let text = document.getElementById("inputText").value;

    if (text.trim() === "") {
        alert("Please enter some text!");
        return;
    }

    document.getElementById("heading").innerText = text;
}

function changeBackground() {
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === "lightblue" ? "#f0f0f0" : "lightblue";
}

function increaseFont() {
    fontSize += 2;
    document.getElementById("para").style.fontSize = fontSize + "px";
}

function toggleParagraph() {
    let para = document.getElementById("para");
    para.style.display = (para.style.display === "none") ? "block" : "none";
}

function resetPage() {
    document.getElementById("heading").innerText = "Welcome to JavaScript Lab";
    document.body.style.backgroundColor = "#f0f0f0";
    document.getElementById("para").style.fontSize = "16px";
    document.getElementById("para").style.display = "block";
    document.getElementById("inputText").value = "";
    fontSize = 16;
}
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("colorButton");
    const downloadButton = document.getElementById("downloadButton");

    const colors = ["red", "blue", "green", "black", "purple", "orange"];

    button.addEventListener("click", function() {
        const sidebar = document.querySelector('.sidebar');
        const randomIndex = Math.floor(Math.random() * colors.length);
        const randomColor = colors[randomIndex];
        sidebar.style.backgroundColor = randomColor;
    });

    downloadButton.addEventListener("click", function() {
        window.print(); // Ouvre l'option pour imprimer ou sauvegarder en PDF
        
    });
    
});

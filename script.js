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
         // Sélectionnez l'élément que vous voulez convertir en PDF
         const element = document.getElementById('moncv'); // Remplacez par l'ID de votre CV
        console.log(element);
        // Options pour le PDF
       const opt = {
           margin: 1,
           filename: 'mon_cv.pdf',
           image: { type: 'jpeg', quality: 0.98 },
           html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
       };

        // Générer le PDF
       html2pdf(element).from(element).set(opt).save();
    });
});

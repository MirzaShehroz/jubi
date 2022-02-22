window.onload = function () {
    const pdf = document.getElementById("download");
    pdf.addEventListener("click", function () {
        const downloadAsPDF = document.getElementById("downloadAsPDF");
        var opt = {
            filename: 'userDetails.pdf',
            html2canvas: { scale: 2 },
            image: { type: 'jpeg', quality: 0.98 },
            jsPDF: { unit: 'in', format: 'tabloid', orientation: 'portrait' }
        };
        html2pdf().from(downloadAsPDF).set(opt).save();
    })
}
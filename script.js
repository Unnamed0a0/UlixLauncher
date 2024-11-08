document.getElementById("downloadButton").addEventListener("click", function () {
    const downloadLink = "UlixLauncher.zip";
    const link = document.createElement("a");
    link.href = downloadLink;
    link.download = "UlixLauncher.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

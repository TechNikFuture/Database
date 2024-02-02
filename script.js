
function downloadFile(url) {
    var a = document.createElement("a");
    a.href = url;
    a.download = url.split("/").pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// test

function download_database() {
    downloadFile("Database - 02.02.24.kdbx")
}
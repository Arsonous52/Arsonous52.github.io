function downloadFile(file) {
    const a = document.createElement('a');
    a.href = 'assets/builds/'+ file + '.3dsx';
    a.download = file + '.3dsx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function goToPage(page) {
    const a = document.createElement('a');
    a.href = page + '.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
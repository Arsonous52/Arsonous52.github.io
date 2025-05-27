function err(msg) {
    const elm = document.createElement('div');
    elm.textContent = 'ERROR: ' + msg;
    elm.classList.add('error');
    document.body.appendChild(elm);

    setTimeout(() => {
    document.body.removeChild(elm)},
    2000);
}

async function checkLink(link) {
    try {
        const response = await fetch(link);
        return response.ok;
    } catch (error) {
        return false;
    }
}

async function downloadFile(file) {

    const link = 'assets/builds/' + file;
    const exists = await checkLink(link);

    if (exists) {
        const a = document.createElement('a');
        a.href = link;
        a.download = file + '.3dsx';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    else {
        err("Asset does not exist!");
    }
}

async function goToPage(page) {

    const link = page + '.html';
    const exists = await checkLink(link);
    
    if (exists) {
        const a = document.createElement('a');
        a.href = link;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    else {
        err("Page does not exist!")
    }
}
function ajaxGetAsync(url, onReady, onError){
    var xhr = new XMLHttpRequest();
    try {
        const  urlNoCash = url + '&ewrandom='+Math.random();
        xhr.open('GET', urlNoCash, true);
        try {
            xhr.send();
        }
        catch(e){}
        xhr.onreadystatechange = function () { // (3)
            if (xhr.readyState != 4) return;
            if (xhr.status != 200) {
                onError();
            } else {
                onReady(xhr.responseText)
            }
        };
    }
    catch(e){
        onError(e);
    }
}

const ajax = {
    ajaxGetAsync: ajaxGetAsync
};

export default ajax;
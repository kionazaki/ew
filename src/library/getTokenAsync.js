import sendCommand from "app/library/sendCommand";
import config from "app/config";


const name = 'getTokenAsync';

function createIframe(iframeSrc, projectId) {
    return new Promise(function (resolve, reject) {
        try {
            const url = iframeSrc + '?ewrandom=' + Math.random();
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.setAttribute('src', url);
            document.body.appendChild(iframe);
            iframe.onload = () => {
                resolve({
                    iframe: iframe,
                    projectId: projectId
                });
            };
        }
        catch (e) {
            reject();
        }
    });
}

function getMessageWithToken(iframe, projectId) {
    return new Promise(function (resolve, reject) {
        try {
            setTimeout(function () {
                sendCommand(name, 'setTokenToUndefined', {});
            }, config.tokenTimeout);
            iframe.contentWindow.postMessage(projectId, "*");
            window.onmessage = function (e) {
                resolve(getOnlyEasyWebAnsvers(e));
            };
        }
        catch (e) {
            reject();
        }
    });
}

function getOnlyEasyWebAnsvers(obj) {
    if (obj.data.id === 'easyweb') {
        return obj.data.value;
    } else {
        return '';
    }
}

function getTokenAsync(iframeSrc, projectId) {
    createIframe(iframeSrc, projectId)
        .then(
            (r) => {return getMessageWithToken(r.iframe, r.projectId)},
            () => {sendCommand(name, 'setTokenToUndefined', {})}
        )
        .then(
            (token)=> {sendCommand(name, 'changeToken', {token: token})},
            ()=> {sendCommand(name, 'setTokenToUndefined', {})}
        );
}

export default getTokenAsync;







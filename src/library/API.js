import $ from "jquery";

function API(url, resolve, reject) {
    $.getJSON(url, resolve).fail(reject);
}

export default API;

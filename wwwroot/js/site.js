// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function getUrl(url) {
    //let ret = "http://localhost/workouttracker/api/" + url;
    let ret = $("#url_select").val() + "api/" + url;
    return ret;
}

function api_ret() {
    this.data = null;
    this.textStatus = null;
    this.jqXHR = null;
}

function doApiPost(cb, parms, url) {
    console.log("doApiPost", url);

    let parmsJson = JSON.stringify(parms);

    let _url = getUrl(url);

    var ret = new api_ret();

    var request = $.ajax(
        {
            type: "POST",
            data: parmsJson,
            url: _url,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
        });

    request.done(function (data, textStatus, jqXHR) {
        ret.data = data;
        ret.textStatus = textStatus;
        ret.jqXHR = jqXHR;
        cb(ret);
    });

    request.fail(function (jqXHR, textStatus) {
        ret.textStatus = textStatus;
        ret.jqXHR = jqXHR;
        cb(ret);
    });

}



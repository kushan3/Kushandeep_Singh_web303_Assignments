let first = $.getJSON("team.json").done(function (data) {
    // jQuery.each
    $.each(data.members, function (key, val) {
        console.log("data key: ", key, " and data value: ", val);

        $('#team').append(`<div><h2>${val.name}</h2></div>
            <div><h5>${val.position}</h5></div>
            <div><P>${val.bio}</P></div>
        </div>`);
    });
});

console.log("The getjson object: ", first);
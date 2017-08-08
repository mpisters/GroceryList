function filterParams(params, valid_params){
    valid_params.push('arrayMethod');
    var new_params = {};
    for (var i = 0; i < valid_params.length; i++){
        var key = valid_params[i];
        if (key in params){
            new_params[key] = params[key];
        }
        else {
            // console.log("not in param: " + key);
        }
    }
    return new_params;
}

module.exports = {
    filterParams: filterParams
}
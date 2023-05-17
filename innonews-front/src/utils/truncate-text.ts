const truncate = function(str:string,limit=200) {
    return str.length > 10 ? str.substring(0, limit) + "..." : str;
}

export default truncate;
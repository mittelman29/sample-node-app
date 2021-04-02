let _db = "--> not initialized <--";

_initDB = () => {
    _db = "DB Handler Ready!";
    console.log("_initDB => " + _db);

}

exports.getDB = () => {
    console.log("getDB => " + _db);
    if( _db == "--> not initialized <--" )
        _initDB();
    
    return _db;
}

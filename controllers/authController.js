// Authentication Middleware

exports.authenticate = (req, res, next) => {
    // Check if host header is == 'localhost:8080'
    if( req.get('host') == 'localhost:8080' )
        next();
    else
        res.status(401).send({ error: "We're sorry, you are not Dave. You are not authorized to access this application!" });
}
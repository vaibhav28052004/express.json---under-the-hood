function jsonMiddleware(req, res, next) {
    let data = '';

    
    req.on('data', chunk => {
        data += chunk;
    });

    // Once all data is received, parse it
    req.on('end', () => {
        try {
            req.body = JSON.parse(data); // Convert JSON string to JS object
        } catch (error) {
            req.body = {}; // If invalid JSON, set empty object
        }
        next(); 
    });
}

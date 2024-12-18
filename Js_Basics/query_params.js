/* 
    Query params :
    Query params are added to url and are used to send additional information to server.
    They are the key value pairs after the "?" , seperated by "&" 
    Custom query parameters designed by developer to control behaviour of API.

    Example :
    Base url of API: https://dummyjson.com/products
    Complete url with query parameters is -
    https://dummyjson.com/products?limit=10&skip=10&select=title,price

    Limit : For controlling the number of items returned in a single request.
    Its common in apis implementing pagination.
    skip : Custom parameter to say number of items to skip from the begining.
    skip is used along with limit for pagination.
    Select : Custom parameter for specifying which fields of the data to be included 
    in response.Used to optimize responses by sending necessary information.
    above should be explicitly handled in backend code. 

    req.query will return an object which contains all the custom query params from request
    url as key value pairs. 

    You want to handle custom query parameters in the URL.
    Your API supports features like pagination, sorting, filtering, 
    or field selection based on user-specified parameters.

    Query parameters are received as strings by default.
    so limit=parseInt(limit,10) || 10;
    skip=parseint(skip,10) || 10;
    parseInt(limit, 10): Parses the string to an integer (base 10).
    || 10: Ensures a default value is set if parsing fails or the parameter isn’t provided.

    

*/
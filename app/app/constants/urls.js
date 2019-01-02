let ipServer = 'http://192.168.1.110:3000';
export default {
    method: {
        post: 'POST',
        get: 'GET',
        put: 'PUT',
        delete: 'DELETE'
    },
    getData: `${ipServer}/getData`,
    signUp: `${ipServer}/signUp`,
    insertDB: `${ipServer}/insertDB`,
    modifyDB: `${ipServer}/modifyDB`,
    deleteDB: `${ipServer}/deleteDB`,
    getDB: `${ipServer}/getDB`,
}
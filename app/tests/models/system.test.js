const SystemClass = require('../../models/SystemDAO');

function insert() {
    const SystemDAO = new SystemClass();
    SystemDAO.insert({ id: 2, name: 'sys 1' })
}

function last() {
    const SystemDAO = new SystemClass();
    let system = SystemDAO.last();
    console.log(system);
}


function list() {
    const SystemDAO = new SystemClass();
    let system = SystemDAO.list();
    console.log(system);
}

//list();
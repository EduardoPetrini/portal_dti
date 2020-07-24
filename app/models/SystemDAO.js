const db = require('../../config/dbconfig');

class SystemDAO {
    constructor() {
        this.table = "external_system";
    }

    insert(system) {
        console.log(`[INFO] Inserting...`);
        db.get(this.table).push(system).write();
    }

    last() {
        return db.get(this.table).sortBy('id').reverse().take(1).value();
    }

    list() {
        return db.get(this.table).sortBy('id').reverse().value();
    }
}

module.exports = SystemDAO;
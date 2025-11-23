const db = require('../config/db');

const Vendor = {
    create: (vendorData) => {
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO vendors (name, contact_info, services, created_at) VALUES (?, ?, ?, ?)';
            db.query(query, [vendorData.name, vendorData.contact_info, vendorData.services, new Date()], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results.insertId);
            });
        });
    },

    findAll: () => {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM vendors';
            db.query(query, (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    },

    findById: (id) => {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM vendors WHERE id = ?';
            db.query(query, [id], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results[0]);
            });
        });
    },

    update: (id, vendorData) => {
        return new Promise((resolve, reject) => {
            const query = 'UPDATE vendors SET name = ?, contact_info = ?, services = ? WHERE id = ?';
            db.query(query, [vendorData.name, vendorData.contact_info, vendorData.services, id], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results.affectedRows);
            });
        });
    },

    delete: (id) => {
        return new Promise((resolve, reject) => {
            const query = 'DELETE FROM vendors WHERE id = ?';
            db.query(query, [id], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results.affectedRows);
            });
        });
    }
};

module.exports = Vendor;
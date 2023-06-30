const { validationResult } = require("express-validator");

const Db = require("../dboperations")

exports.histTramos = async (req, res, next) => {
    try {
        const errors = validationResult(req);

        // if there is error then return Error
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array(),
            });
        }
        // dummy code

        Db.histTramos(req.query).then((data) => {
            res.json(data.recordset)
        })

        //res.json({ success: true });
    } catch (err) {
        next(err);
    }
}

exports.histClientes = async (req, res, next) => {
    try {
        const errors = validationResult(req);

        // if there is error then return Error
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array(),
            });
        }

        // do some operation - like save data to DB (eg mongodb)
        // dummy code
        Db.histClientes(req.query).then((data) => {
            res.json(data.recordset)
        })

    } catch (err) {
        next(err);
    }
}

exports.peorClientes = async (req, res, next) => {
    try {
        const errors = validationResult(req);

        // if there is error then return Error
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array(),
            });
        }

        // do some operation - like save data to DB (eg mongodb)
        // dummy code
        Db.peorClientes(req.query).then((data) => {
            res.json(data.recordset)
        })
    } catch (err) {
        next(err);
    }
}
const config = require('../config/db')
const sql = require('mssql') 

async function histTramos(data) {
    try {
        let pool = await sql.connect(config);
        const result = await sql.query`SELECT sum(Consumo) as Consumo,sum(Perdida) as Perdida, sum(Costo*Consumo) as CostoByConsumo,fecha,LineaNombre FROM FullStack.dbo.vwHistoricoConsumos where fecha >=${data.fechainicial} and fecha <= ${data.fechafinal} group by LineaNombre, fecha order by LineaNombre, fecha`
        //console.dir(result)
        return result;
    } catch (error) {
        console.error(error)
    }
}

async function histClientes(data) {
    try {
        let pool = await sql.connect(config);
        const result = await sql.query`SELECT sum(Consumo) as Consumo,sum(Perdida) as Perdida, sum(Costo*Consumo) as CostoByConsumo,fecha,LineaNombre, NombreCliente FROM FullStack.dbo.vwHistoricoConsumos where fecha >=${data.fechainicial} and fecha <= ${data.fechafinal} group by NombreCliente, LineaNombre, fecha order by NombreCliente, fecha,LineaNombre`
        //console.dir(result)
        return result;
    } catch (error) {
        console.error(error)
    }
}

async function peorClientes(data) {
    try {
        let pool = await sql.connect(config);
        const result = await sql.query`SELECT TOP(20) sum(Consumo) as Consumo,sum(Perdida) as Perdida, sum(Costo*Consumo) as CostoByConsumo,fecha,LineaNombre, NombreCliente FROM FullStack.dbo.vwHistoricoConsumos where fecha >=${data.fechainicial} and fecha <= ${data.fechafinal} group by NombreCliente, LineaNombre, fecha order by Perdida`
        //console.dir(result)
        return result;
    } catch (error) {
        console.error(error)
    }
}



module.exports = {
    histTramos,
    histClientes,
    peorClientes,
}

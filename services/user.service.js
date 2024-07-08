const boom = require('@hapi/boom');

const getConnection = require('../libs/postgres')

class UserService {
  constructor() {}

  async create(data) {
    return data;
  }

  async find() {
    const client = await getConnection()
    const query = `
    SELECT 
      r.identificacion, 
      r.nombres, 
      r.telefono, 
      r.email, 
      r.sexo, 
      r.estatura, 
      rp.unidad_militar, 
      um.nombre as nombre_unidad_militar,
      rp.fecha_asignacion, 
      rp.centro_movilizacion,
      cm.nombre as nombre_centro_movilizacion
    FROM recluta r
    JOIN recluta_proceso rp ON r.id = rp.id
    LEFT JOIN unidad_militar um ON rp.unidad_militar = um.id
    LEFT JOIN centro_movilizacion cm ON rp.centro_movilizacion = cm.id
    WHERE r.id = $1;
  `;
  const rta = await client.query(query, [128605]);
    return rta.rows;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;

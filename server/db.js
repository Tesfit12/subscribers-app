const Pool = require('pg').Pool


const pool = new Pool({
    user: 'tesfalemhaile',
    password: 'salsebytech',
    host: 'localhost',
    port: '5432',
    database: 'salsebytechdatabase'
})


const getAllCampaigns = () => {
    return pool.query(
        'select * from persontable'
    )

}
const getUserById = (userId) => {
    return pool.query(
        'select * from persontable where user_id = $1', [userId]
    )

}


const updateUser = (newUserName, newUserEmail, id) => {
    return pool.query(
        'UPDATE persontable SET (michel_name, query_position) = ($1, $2) WHERE user_id = $3', [newUserName, newUserEmail, id]
    )
}



const addToboxestable = (box, michel_id, michel_name, template_name, template_id, squence_id, user_id) => {
    return pool.query(
        'INSERT INTO boxestable(template_body, michel_id, michel_name, template_name, template_id, squence_id, user_id) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *',
        [box, michel_id, michel_name, template_name, template_id, squence_id, user_id]
    )
}



const addUserDataToDB = (
    michel_id,
    michel_name,
    query_position,
    query_volum,
    query_location,
    query_industry,
    max_prospect,
    counter_prospect,
    counter_search_day,
    counter_conexion_day,
    counter_messages_day,
    network_one,
    network_two) => {
    return pool.query(

        "INSERT INTO \
        persontable(michel_id, michel_name, query_position, query_volum, query_location, query_industry ,max_prospect, counter_prospect, counter_search_day, counter_conexion_day, counter_messages_day, network_one, network_two) \
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING * ",
        [michel_id, michel_name, query_position, query_volum, query_location, query_industry, max_prospect, counter_prospect, counter_search_day, counter_conexion_day, counter_messages_day, network_one, network_two]

    )
}


const getUserByIdFromBoxesTable = (userId) => {
    return pool.query(
        'select * from boxestable where user_id = $1', [userId]
    )

}

module.exports = {
    pool,
    getAllCampaigns,
    getUserById,
    updateUser,
    addUserDataToDB,
    addToboxestable,
    getUserByIdFromBoxesTable
}
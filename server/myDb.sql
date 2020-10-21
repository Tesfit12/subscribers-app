CREATE DATABASE salsebytechdatabase;



create table persontable
(
    user_id BIGSERIAL PRIMARY KEY,
    michel_id INT NOT NULL,
    michel_name VARCHAR(1000) NOT NULL,
    query_position TEXT NOT NULL,
    query_volum TEXT NOT NULL,
    query_location TEXT NOT NULL,
    query_industry TEXT NOT NULL,
    max_prospect INT NOT NULL,
    counter_prospect INT NOT NULL,
    counter_search_day INT NOT NULL,
    counter_conexion_day INT NOT NULL,
    counter_messages_day INT NOT NULL,
    network_one BOOLEAN DEFAULT 'false',
    network_two BOOLEAN DEFAULT 'false',
    status BOOLEAN DEFAULT 'false'

);


-- inser a fake user ---

INSERT INTO persontable
    (
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
    counter_messages_day
    )

VALUES(101, 'Tom Cruise', 'Director_commercial', '21', 'France', 'automobile', 0, 10, 20, 11, 21);
-- VALUES (102, 'Will Smith', 'Director_commercial', '21', 'France', 'automobile', 0, 10, 20, 11, 21);
-- VALUES(103, 'Chris Hemsworth', 'Director_commercial', '21', 'France', 'automobile', 0, 10, 20, 11, 21);
-- VALUES (104, 'Robert Downey Jr', 'Director_commercial', '21', 'France', 'automobile', 0, 10, 20, 11, 21);
-- VALUES (105, 'Vin diesel', 'Director_commercial', '21', 'France', 'automobile', 0, 10, 20, 11, 21);


create table boxestable
(
    boxestable_id BIGSERIAL PRIMARY KEY,
    michel_id INT NOT NULL,
    michel_name VARCHAR(1000),
    template_name VARCHAR(1000),
    template_id VARCHAR(1000),
    template_body TEXT,
    squence_id INT,
    user_id BIGINT REFERENCES persontable(user_id)
);

INSERT INTO boxestable
    (michel_id, michel_name, template_name, template_id, template_body, squence_id)
VALUES(200, 'Tesfit', 'template_one', 1, 'Hello [First_Name]. and [email]', 1);
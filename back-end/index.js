import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();
const port = 3000;

import { Client } from 'pg'
const client = await new Client({
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE
}).connect()

app.get('/municipios/:codigo', async (req, res) => {
  const geojson = await client.query(
    'SELECT ST_AsGeoJSON(geom) FROM municipios WHERE id = $1', [req.params.codigo]
  )
  res.json(geojson.rows[0]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
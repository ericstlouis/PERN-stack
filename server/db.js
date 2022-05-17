// import {Pool} from "pg";
const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "ojayeric",
    host: "localhost",
    post: 5432,
    database: "perntodo"
})

module.exports = pool
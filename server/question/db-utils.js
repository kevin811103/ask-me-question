const allConfig = require("./db-config")
const config = allConfig.database
const mysql = require("mysql")

const pool = mysql.createPool({
  host     :  config.HOST,
  user     : config.USERNAME,
  password : config.PASSWORD,
  database : config.DATABASE
})

let query = function( sql, values ) {
  return new Promise(( resolve, reject ) => {
      console.log("test1");
    pool.getConnection(function(err, connection) {
      if (err) {
        console.log("test2");
        resolve( err )
        
      } else {
        console.log("來連線");
        connection.query(sql, values, ( err, rows) => {

          if ( err ) {
            console.log("test3");
            reject( err )
          } else {
            console.log("test4");
            // console.log("rows",rows)
            resolve( rows )

          }
          connection.release()
        })
      }
    })
  })

}

let createTable = function( sql ) {
  return query( sql, [] )
}


let findDataById = function( table,  id ) {
  let  _sql =  "SELECT * FROM ?? WHERE id = ? "
  return query( _sql, [ table, id, start, end ] )
}
let findDataByIdTest = function( table,  id ) {
  let  _sql =  "SELECT * FROM askmequestion"
  return query( _sql )
}


let findDataByUrlcode = function(  urlcode ) {
  let  _sql =  "SELECT * FROM askmequestion WHERE urlcode = ? "
  return query( _sql, [  urlcode ] )
}
let findDataByUrlcodeCount= function(  urlcode ) {
  let  _sql =  "SELECT COUNT(*) AS total_count FROM askmequestion WHERE urlcode = ? "
  return query( _sql, [  urlcode ] )
}

let findDataByPage = function( table, keys, start, end ) {
  let  _sql =  "SELECT ?? FROM ??  LIMIT ? , ?"
  return query( _sql, [keys,  table,  start, end ] )
}


let insertData = function( table, values ) {
  let _sql = "INSERT INTO ?? SET ?"
  return query( _sql, [ table, values ] )
}


let updateData = function( table, values, id ) {
  let _sql = "UPDATE ?? SET ? WHERE id = ?"
  return query( _sql, [ table, values, id ] )
}
let updateDataWithUrlcode =  function( table, values, id ) {
  let _sql = "UPDATE ?? SET ? WHERE urlcode = ?"
  return query( _sql, [ table, values, id ] )
}


let deleteDataById = function( table, id ) {
  let _sql = "DELETE FROM ?? WHERE id = ?"
  return query( _sql, [ table, id ] )
}


let select = function( table, keys ) {
  let  _sql =  "SELECT ?? FROM ?? "
  return query( _sql, [ keys, table ] )
}

let count = function( table ) {
  let  _sql =  "SELECT COUNT(*) AS total_count FROM ?? "
  return query( _sql, [ table ] )
}

module.exports = {
  query,
  createTable,
  findDataById,
  findDataByUrlcode,
  findDataByUrlcodeCount,
  findDataByPage,
  deleteDataById,
  insertData,
  updateData,
  updateDataWithUrlcode,
  select,
  count,
  findDataByIdTest
}
const config = {
    // port: 3000,
    database:{
        DATABASE: 'askmequestion',    //数据库
        USERNAME: 'eric',    //用户
        PASSWORD: '1234',     //密码
        PORT: '3306',        //端口
        HOST: '35.67.195.119'     //服务ip地址
    }
	    // database:{
    //     DATABASE: 'test',    //数据库
    //     USERNAME: 'root',    //用户
    //     PASSWORD: '1234',     //密码
    //     PORT: '3306',        //端口
    //     HOST: 'localhost'     //服务ip地址
    // }
}
// var connection = mysql.createConnection({
//     host     : 'us-cdbr-iron-east-02.cleardb.net',
//     user     : 'b49951555ff3b4',
//     password : '2c572f59',
//     database: "heroku_7b8a616bd84de6f"
//   });
  
module.exports = config

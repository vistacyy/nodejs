const Sequelize = require('sequelize');
const config = {
  database: 'test', // 使用哪个数据库
  username: 'www', // 用户名
  password: 'www', // 口令
  host: 'localhost', // 主机名
  port: 3306 // 端口号，MySQL默认3306
};

// 创建一个sequelize对象实例
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  }
});

// 定义模型Pet
const Pet = sequelize.define('pet', {
  id: {
    type: Sequelize.STRING(50),
    primaryKey: true
  },
  name: Sequelize.STRING(100),
  gender: Sequelize.BOOLEAN,
  birth: Sequelize.STRING(10),
  createdAt: Sequelize.BIGINT,
  updatedAt: Sequelize.BIGINT,
  version: Sequelize.BIGINT
}, {
    timestamps: false
  });

// 写数据
const now = Date.now();
(async () => {
  const dog = await Pet.create({
    id: 'd-' + now,
    name: 'Odie',
    gender: false,
    birth: '2008-08-08',
    createdAt: now,
    updatedAt: now,
    version: 0
  });
  console.log('created: ' + JSON.stringify(dog));
})();

// 查询数据
(async () => {
  const pets = await Pet.findAll({
    where: {
      name: 'Odie'
    }
  });
  console.log(`find ${pets.length} pets:`);
  for (let p of pets) {
    console.log(JSON.stringify(p));
  }
})();

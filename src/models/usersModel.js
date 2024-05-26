const { Model, DataTypes } = require('sequelize');
const paths = require('../utils/paths.js');
const sequelize = require(paths.configPaths.db);

class User extends Model { }

User.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  first_name: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  last_name: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  password: {
    type: DataTypes.STRING(150),
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  phone: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  occupation: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  company: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  city: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  address: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  zip_code: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  facebook_profile: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  instagram_profile: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  linkedin_profile: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  twitter_profile: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  youtube_profile: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  github_profile: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  tiktok_profile: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  url: {
    type: DataTypes.STRING(100),
    allowNull: true
  },

  
}, {
  sequelize,
  modelName: 'usersTable',
  tableName: 'users',
  timestamps: false,
  indexes: [
    {
      name: 'Password_UNIQUE',
      fields: ['password']
    },
    {
      name: 'Email_UNIQUE',
      fields: ['email']
    }
  ]
});

module.exports = User;
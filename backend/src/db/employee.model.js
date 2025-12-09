import { DataTypes, Model } from 'sequelize';
import { sequelize } from './sequelize.js';

export class Employee extends Model {}

Employee.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  department: { type: DataTypes.STRING },
  role: { type: DataTypes.ENUM('employee', 'admin', 'hr'), defaultValue: 'employee' },
  password: { type: DataTypes.STRING, allowNull: false },
  timezone: { type: DataTypes.STRING, allowNull: false, defaultValue: 'UTC' },
}, {
  sequelize,
  modelName: 'Employee',
  tableName: 'employees',
  timestamps: true,
});

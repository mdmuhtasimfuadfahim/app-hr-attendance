import { DataTypes, Model } from 'sequelize';
import { sequelize } from './sequelize.js';
import { Employee } from './employee.model.js';

export class Attendance extends Model {}

Attendance.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  employeeId: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'employees', key: 'id' } },
  date: { type: DataTypes.DATEONLY, allowNull: false },
  inTime: { type: DataTypes.DATE },
  outTime: { type: DataTypes.DATE },
  totalHours: { type: DataTypes.FLOAT },
  status: { type: DataTypes.ENUM('present', 'absent', 'half-day', 'late', 'early-leave'), defaultValue: 'present' },
  flagged: { type: DataTypes.BOOLEAN, defaultValue: false },
  audit: { type: DataTypes.JSONB },
}, {
  sequelize,
  modelName: 'Attendance',
  tableName: 'attendances',
  timestamps: true,
});

Attendance.belongsTo(Employee, { foreignKey: 'employeeId' });
Employee.hasMany(Attendance, { foreignKey: 'employeeId' });

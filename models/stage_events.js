'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StageEvents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StageEvents.init({
    stage_events_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    stage_id:{
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    event_id:{
        type: DataTypes.SMALLINT,
        allowNull:false
    }
},{
    sequelize,
    modelName: 'StageEvents',
    tableName: 'stage_events',
    timestamps: false
});
  return StageEvents;
};
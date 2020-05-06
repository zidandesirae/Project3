const Sequelize = require("sequelize");
const Model = Sequelize.Model;
import SequelizeFile from 'sequelize-file';

const photos = SequelizeFile({
    attribute: 'image',
    mimetype: /^image/,
    crop: true,
    sizes: {
      small: 64, //width 64
      big: 150, //width 150
    }
 });

module.exports = (sequelize, DataTypes) => {
  const Photos = sequelize.define("Photos", {id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,}
      
  }); 
  
  photos.addTo(Photos);
    return Photos;
}
   

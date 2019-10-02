//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password

module.exports = {
  db: {
    uri: 'mongodb+srv://dorianmeade:02281999@bootcamp2-lvv34.mongodb.net/test?retryWrites=true&w=majority'//place the URI of your mongo database here.
  }, 
  openCage: {
    key: '24313289f83e4ed69951dbb81c697f03' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
  },
  port: 8080
};
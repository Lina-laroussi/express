const { application } = require('express');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/*router.get('/services', function(req, res, next) {
let date_ob = new Date();
let day=date_ob.getDay()
let hour=date_ob.getHours()
let days=[1,2,3,4,5]
if((days.includes(day))&&(hour>=9)&&(hour<=17)){
  res.render("our services")
}else{
  console.log("not available")
}
});*/


module.exports = router;

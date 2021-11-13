var express = require('express');
var router = express.Router();

var date_ob = new Date();
var day=date_ob.getDay()
var hour=date_ob.getHours()
var days=[1,2,3,4,5]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/services', function(req, res, next) {
if((days.includes(day))&&(hour>=9)&&(hour<=17)){
  res.render("our services")
}else{
  res.render("error", {error:true})
}
});

router.get('/contact', function(req, res, next) {
  if((days.includes(day))&&(hour>=9)&&(hour<=17)){
  res.render('contactus');
}else{
  res.render("error", {error:true})
}
  
});

module.exports = router;

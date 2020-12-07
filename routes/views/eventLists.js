
var keystone=require('keystone');



exports = module.exports=function(req,res){
    var view=new keystone.View(req,res);
    var locals=res.locals;

    locals.section='event';

    view.query('eventLists', keystone.list('eventList').model.find());
    
    view.render('eventList');
}
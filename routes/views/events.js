var keystone=require('keystone');

exports = module.exports=function(req,res){
    var view=new keystone.View(req,res);
    var locals=res.locals;

    locals.section='events';
    locals.filters={
        events:req.params.events
    }
    locals.data={
        eventLists:[]
    }

    view.on('init', function(next){
        var q=keystone.list('events').model.findOne({
            slug:locals.filters.events

        });
        q.exec(function(err,result){
            locals.data.events=result;
            next(err);
        });
    });
    
    view.render('events');
}

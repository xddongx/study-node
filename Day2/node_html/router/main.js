module.exports = function(app)
{
     app.get('/',function(req,res){
        res.render('index.html')
     });
     app.get('/about',function(req,res){
        res.render('about.html');
    });
    app.get('/services', function(req, res){
       res.render('services.html');
    });
    app.get('/barbers', function(req, res){
       res.render('barbers.html');
    });
    app.get('/appointment', function(req, res){
       res.render('appointment.html');
    });
    app.get('/contact', function(req, res){
       res.render('contact.html');
    });
}
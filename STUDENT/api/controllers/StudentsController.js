/**
 * StudentsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    add:function(res,req){
        res.view('add');
    },
    list:function(req, res){
        Students.find({}).exec(function(err, students){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.view('pages/list', {students:students});
            // console.log('It Worked');
        });
    },
    create:function(req, res){
        let name = req.body.name;
        let age = req.body.age;
        let phone = req.body.phone;
        let email = req.body.email;

        Students.create({name:name, age:age, phone:phone , email:email}).exec(function(err){
            if(err){
                res.send(500, {err: 'Database Error'});
            }

            res.redirect('/list');
            // alert("Submitted Sucessfully");
        });

    },
    delete:function(req, res){
        Students.destroy({id:req.params.id}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database error'});
            }
            res.redirect('/list');
        });
    }

};


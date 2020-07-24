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
        });

    },

    delete:function(req, res){
        var id = req.params.id;
        Students.destroy({id:id}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database error'});
            }
            res.redirect('/list');
        });
        return false;
    },
    edit:function(req,res){
        var id = req.body.id;
        Students.findOne({id:id}).exec(function(err,student){
            if(err){
                res.send(500, {error: 'Database error'});
            }
            res.view('pages/edit', {student:student});
        });
        return false;
    },
    update:function(req,res){
        var id = req.params.id;
        let name = req.body.name;
        let age = req.body.age;
        let phone = req.body.phone;
        let email = req.body.email;
        Students.update({id:id},{name:name, age:age, phone:phone , email:email}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database error'});
            }
            res.redirect('/list');
        });
        return false;
    }

};


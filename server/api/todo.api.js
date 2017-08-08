var Todo = require("../models/todo.model");
var main = require("../helpers/main");
var path = require("path");
function getTodos(res) {
    Todo.find(function (err, todos) {

        if (err) {
            res.send(err);
        }

        res.json(todos);
    });
};

module.exports = function (app) {


    app.get('/api/todos', function (req, res) {

        getTodos(res);
    });

    app.post('/api/todos', function (req, res) {

        Todo.create({
            text: req.body.text,
            quantity: 1,
            checked: false,
            done: false
        }, function (err, todo) {
            if (err)
                res.send(err);

            getTodos(res);
        });

    });

    app.delete('/api/todos/:todo_id', function (req, res) {
        Todo.remove({
            _id: req.params.todo_id
        }, function (err, todo) {
            if (err)
                res.send(err);

            getTodos(res);
        });
    });

    app.put('/api/todos/:todo_id', function (req, res) {
        var params = main.filterParams(req.body, ["text", "checked", "quantity"]);
        Todo.findOneAndUpdate({_id: req.params.todo_id}, params, {new: true}, function(err, todo) {
            if (err) { res.send({success: 0, msg: err}); }
            console.log("Todo: ", todo);
            getTodos(res);
        });
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendfile(path.resolve('public/index.html'));
    });
};
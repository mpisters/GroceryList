var Todo = require("../models/todo.model");

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

    // app.update('/api/todos/:todo_id', function (req, res) {
    //     Todo.update({
    //         _id: req.params.todo_id
    //     }, function (err, todo) {
    //         if (err)
    //             res.send(err);
    //
    //         getTodos(res);
    //     });
    // });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendfile(__dirname + '../../public/index.html');
    });
};
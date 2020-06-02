exports.seed = function(knex, Promise) {
    return knex('tasks').insert([
        {task_name: "Prepare", project_id: 1, description: "gather ingredients", notes: "this is easy", completed: true},
        {task_name: "Purchase", project_id: 2, description: "buy materials", notes: "this is cheap", completed: true},
        {task_name: "Organize", project_id: 3, description: "make to-do list", notes: "this is a lot", completed: false},
        {task_name: "Read", project_id: 4, description: "read manual first", notes: "this is uncommon", completed: false},
        {task_name: "Study", project_id: 5, description: "watch lecture again", notes: "this is coding", completed: true}
    ]);
};
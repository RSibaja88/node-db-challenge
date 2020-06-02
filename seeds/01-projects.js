exports.seed = function(knex, Promise) {
    return knex('projects').insert([
        {project_name: "Make a sandwich", description: "you are hungry, must eat", completed: true },
        {project_name: "Tie-dye shirt", description: "it's ruined, must salvage", completed: false },
        {project_name: "Clean house", description: "it's a wreck, must feel human", completed: false },
        {project_name: "Build dog house", description: "Dogs are getting too hot outside", completed: true },
        {project_name: "Do homework", description: "cant fall behind", completed: false }
    ]);
};
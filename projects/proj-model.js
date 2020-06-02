const db = require('../data/dbConfig');

function findProjects() {
    return db('projects')
}

function findTasks() {
    return db("tasks as t")
      .join("projects as p", "p.id", "t.project_id")
      .select("t.project_id","p.project_name","t.task_name","t.description","t.notes","t.completed");
}

function findResources() {
    return db('resources')
}

function addProject(project) {
    return db('projects').insert(project);
}

function addTask(task) {
    return db('tasks').insert(task);
}

function addResource(resource) {
    return db('resources').insert(resource);
}

module.exports = {
    findProjects,
    findResources,
    findTasks,
    addProject,
    addTask,
    addResource
};
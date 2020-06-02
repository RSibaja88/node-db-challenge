const express = require("express");

const Proj = require('./proj-model');

const router = express.Router();


//Get Projects
router.get("/", (req, res) => {
  Proj.findProjects()
  .then(project => {
      res.json(project);
  })
  .catch(err => {
      res.status(500).json({message: "Failed to get projects"});
  });
});


//Get Tasks
  router.get('/tasks', async (req, res) => {
    Proj.findTasks()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to get tasks' }, err);
    });
});
    
//Get Resources
router.get('/resources', async (req, res) => {
    Proj.findResources()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to get resources' }, err);
    });
});

//POST project
router.post("/", (req, res) => {
    Proj.addProject(req.body)
    .then((project) => {
        res.status(201).json(project);
    })
    .catch((err) => {
        res.status(500).json({ message: 'Failed to post new project'}, err);
    });
});

//POST Task
router.post("/tasks", (req, res) => {
    const postTask = req.body;
  Proj.addTask(req.body)
    .then((task) => {
      res.status(201).json({ id: `${task}`, ...postTask });
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to POST new task" }, err);
    });
});


//POST Resource
router.post("/resources", (req, res) => {
    Proj.addResource(req.body)
      .then((resource) => {
        res.status(201).json({ id: `${resource}`, ...req.body });
      })
      .catch((err) => {
        res.status(500).json({ message: "Failed to POST new Resource" }, err);
      });
  });

module.exports = router;
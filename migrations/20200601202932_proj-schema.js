
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
      tbl.increments('id');
      tbl.string("project_name", 128).notNullable();
      tbl.string("description", 128);
      tbl.boolean("completed").defaultTo(false);
  }) 
  .createTable('resources', tbl => {
      tbl.increments('id');
      tbl.string("resource_type", 128).notNullable();
      tbl.string("resource_description", 128)
  })
  .createTable('tasks', tbl => {
      tbl.increments('id');
      tbl.string("task_name", 128).notNullable();
      tbl.integer("project_id").notNullable().unsigned().references('projects.id').onDelete('CASCADE').onUpdate('CASCADE');
      tbl.string("description", 128).notNullable();
      tbl.string("notes", 128);
      tbl.boolean("completed", 128).notNullable().defaultTo(false);
  })
  .createTable('project_resource', tbl => {
      tbl.integer('resource_id').notNullable().unsigned().references('resources.id');
      tbl.integer('project_id').notNullable().unsigned().references('projects.id').onDelete('CASCADE').onUpdate('CASCADE');
      tbl.primary(['resource_id', 'project_id']);
  })
};



exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resource')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};

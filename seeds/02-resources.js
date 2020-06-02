exports.seed = function(knex, Promise) {
    return knex('resources').insert([
        {resource_type: "Reference book", resource_description: "cook book"}, 
        {resource_type: "Instructional video", resource_description: "YouTube"},
        {resource_type: "Life Experience", resource_description: "parental guidance"},
        {resource_type: "Reference book", resource_description: "dog house manual"},
        {resource_type: "Website", resource_description: "Lambda training kit"}

    ]);
};
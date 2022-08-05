const express = require('express');

const {
    getCourses,
    getCourse,
    addCourse,
    updateCourse,
    deleteCourse
} = require('../controller/courses');
const Course = require('../model/Course');
const advancedResults = require('../middleware/advanceResults');
const router = express.Router({mergeParams: true}); // mergeParams true is used if other resourse want to access in this router

router.route('/').get(advancedResults(Course, {
    path: 'bootcamp',
    select: 'name description'
}), getCourses).post(addCourse);
router.route('/:id').get(getCourse).put(updateCourse).delete(deleteCourse);
module.exports = router;
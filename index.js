const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());

const Port = process.env.Port || 5000;

const CourseData = require("./Course-Data/CourseInfo.json")



app.get('/', (req, res) => {
  res.send(CourseData)
})

app.get('/allcourses', (req, res) => {
    res.send(CourseData)
})

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const singleCourse = CourseData?.find((course) => course.id == id);
  res.send(singleCourse);
});





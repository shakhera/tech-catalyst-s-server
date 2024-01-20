const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const category = require("./data/courseCategory.json");
const course = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("tech catalyst s is.......");
});

app.get("/courseCategory", (req, res) => {
  res.send(category);
});

app.get("/courses", (req, res) => {
  res.send(course);
});
app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourses = course.find((n) => n._id === id);
  res.send(selectedCourses);
});
app.get("/courseCategory/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  if (id === 0) {
    res.send(course);
  } else {
    const categoryCourse = course.filter((n) => parseInt(n.course_id) === id);
    res.send(categoryCourse);
  }
});

app.listen(port, () => {
  console.log(`tech catalyst s is running on port is ${port}`);
});

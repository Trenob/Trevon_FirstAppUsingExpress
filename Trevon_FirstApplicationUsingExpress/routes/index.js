var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var acronym = [
    { name: 'MongoDB', 
      description: 'MongoDB is a popular open-source NoSQL database known for its high performance, scalability, and flexibility. It stores data in flexible, JSON-like documents, allowing for easy and dynamic data modeling. MongoDB is widely used for modern applications requiring real-time data processing and handling large volumes of unstructured data.' },
    { name: 'Express', 
      description: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It facilitates rapid development by offering a straightforward and unopinionated structure, enabling developers to create APIs and web services efficiently. Express is often used as the backend framework for building scalable and performant web applications.' },
    { name: 'Angular', 
      description: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Developed and maintained by Google, Angular provides a robust set of tools and features, including data binding, dependency injection, and modularization, to create dynamic and responsive web applications. It is widely used for developing complex, scalable applications with a strong emphasis on performance and maintainability.' },
    { name: 'Node.js', 
      description: 'Node.js is a powerful, open-source JavaScript runtime environment that allows developers to execute JavaScript code on the server side. Built on Chrome\'s V8 JavaScript engine, it is known for its efficiency, scalability, and event-driven, non-blocking I/O model. Node.js is widely used for building fast, scalable network applications and real-time web services.' }
  ];

  var studentName = 'Trevon';

  res.render('index', {
    title: 'The MEAN Stack',
    acronym: acronym,
    studentname: studentName
  });
});

module.exports = router;

<h1 align="center">EduManage</h1>

<div class="center">
        <img src="https://github.com/BhavdeepSinghNijhawan/EduManage/assets/143419096/266f8f32-a7a0-4319-9f01-33ac658799be" alt="EduManage Logo">
    </div>

EduManage is a comprehensive educational management system designed to streamline administrative tasks, enhance student engagement, and facilitate effective communication between teachers, students, and parents. EduManage is a robust educational management system that provides a centralized platform for managing various aspects of educational institutions. Its user-friendly interface and comprehensive features make it an ideal solution for schools, colleges, and universities.

**Features:**

1. User authentication and authorization for secure access
2. Course management system for creating, editing, and managing courses
3. Student management system for tracking student progress and performance
4. Grade management system for recording and calculating grades
5. Attendance management system for tracking student attendance
6. Communication system for sending notifications and announcements to students, teachers, and parents

## LIVE URL

- https://edumanagenijhawan.vercel.app/

## TECHNICAL STACKS

### Frontend

### BACKEND

#### backend/models/adminSchema.js

```
const mongoose = require("mongoose");
```

- This line imports the Mongoose library, which is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straightforward, schema-based solution to model your application data.

```
const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "Admin"
    },
    schoolName: {
        type: String,
        unique: true,
        required: true
    }
});
```

- This defines a schema for the **`admin`** collection in MongoDB. A schema in Mongoose is a way to structure documents within a collection.

1. **`name:`** A required string field.
2. **`email:`** A required and unique string field. Each admin must have a unique email.
3. **`password:`** A required string field.
4. **`role:`** A string field with a default value of "Admin". This means if no role is provided, it will default to "Admin".
5. **`schoolName:`** A required and unique string field. Each admin must have a unique school name.

```
module.exports = mongoose.model("admin", adminSchema);
```

- This line exports the model based on the **`adminSchema`**. A model in Mongoose is a wrapper for the schema, providing an interface to the database for CRUD operations.

#### backend/models/complainSchema.js

```
const mongoose = require('mongoose');
```

- This line imports the Mongoose library, which is used for interacting with MongoDB in an object-oriented manner.

```
const complainSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'student',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    complaint: {
        type: String,
        required: true
    },
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'admin',
        required: true
    }
});
```

- This defines a schema for the **`complain`** collection in MongoDB. A schema in Mongoose defines the structure of the documents within a collection.

1. **`user:`** A required field that stores the ID of a **`student`**. It references the **`_id`** field in the student collection.
2. **`date:`** A required date field to store the date of the complaint.
3. **`complaint:`** A required string field to store the text of the complaint.
4. **`school:`** A required field that stores the ID of an **`admin`**. It references the **`_id`** field in the admin collection.

```
module.exports = mongoose.model("complain", complainSchema);
```

- This line exports the model based on the **`complainSchema`**. A model in Mongoose is a wrapper for the schema, providing an interface to the database for CRUD operations.

#### backend/models/noticeSchema.js

```
const mongoose = require("mongoose");
```

- const mongoose = require("mongoose");

```
const noticeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'admin'
    }
}, { timestamps: true });
```

- This defines a schema for the **`notice`** collection in MongoDB. A schema in Mongoose defines the structure of the documents within a collection.

1. **`title:`** A required string field to store the title of the notice.
2. **`details:`** A required string field to store the details of the notice.
3. **`date:`** A required date field to store the date of the notice.
4. **`school:`** An optional field that stores the ID of an **`admin`**. It references the **`_id`** field in the **`admin`** collection.

```
{ timestamps: true }
```

- This enables automatic creation of **`createdAt`** and **`updatedAt`** fields in the documents. Mongoose will automatically manage these fields.

```
module.exports = mongoose.model("notice", noticeSchema);
```

- This line exports the model based on the **`noticeSchema`**. A model in Mongoose is a wrapper for the schema, providing an interface to the database for CRUD operations.

#### backend/models/sclassSchema.js

```
const mongoose = require("mongoose");
```

- This line imports the **`mongoose library`**, which is used to interact with MongoDB.

```
const sclassSchema = new mongoose.Schema({
    sclassName: {
        type: String,
        required: true,  // sclassName is a required field and must be of type String
    },
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'admin',  // school references the admin collection using ObjectId
    },
},
```

- This defines a new schema for the **`sclass collection`**. A schema is a blueprint for the structure of documents within a MongoDB collection.
- sclassName: A required field of type **`String`** that stores the name of the class.
- school: A reference field that stores an **`ObjectId`** linking to the **`admin`** collection. This creates a relationship between the **`sclass`** and **`admin`** collections.

```
{ timestamps: true }
```

This option adds two fields to the schema: **`createdAt`** and **`updatedAt`**, which automatically record the creation and last update times of the documents.

```
module.exports = mongoose.model("sclass", sclassSchema);
```
- This line creates a Mongoose model named **`"sclass"`** using the **`sclassSchema`** and exports it. The model provides an interface for interacting with the **`sclass`** collection in the MongoDB database.

#### backend/models/studentSchema.js

```
const mongoose = require('mongoose');
```

- This line imports the **`mongoose`** library, which is used to interact with MongoDB.

```
const studentSchema = new mongoose.Schema({ ... });
```

- This defines a new schema for the **`student`** collection.

- **`name:`** A required field of type **`String`** that stores the student's name.
- **`rollNum:`** A required field of type **`Number`** that stores the student's roll number.
- **`password:`** A required field of type **`String`** that stores the student's password.
- **`sclassName:`** A reference field that stores an **`ObjectId`** linking to the **`sclass`** collection. This is required.
- **`school:`** A reference field that stores an **`ObjectId`** linking to the **`admin`** collection. This is required.
- **`role:`** A field of type **`String`** that defaults to "Student".
- **`examResult:`** An array of objects, each containing:
  - **`subName:`** A reference field that stores an **`ObjectId`** linking to the **`subject`** collection.
  - **`marksObtained:`** A field of type **`Number`** that defaults to 0.
- **`attendance:`** An array of objects, each containing:
  - **`date:`** A required field of type **`Date`** that stores the date of attendance.
  - **`status:`** A required field of type **`String`** that stores the attendance status, with possible values 'Present' or 'Absent'.
  - **`subName:`** A reference field that stores an **`ObjectId`** linking to the **`subject`** collection. This is required.

```
module.exports = mongoose.model("student", studentSchema);
```

- This line creates a Mongoose model named **`"student"`** using the **`studentSchema`** and exports it. The model provides an interface for interacting with the **`student`** collection in the MongoDB database.

#### backend/models/subjectSchema.js

```
const mongoose = require("mongoose");
```

- This line imports the **`mongoose`** library, which is used to interact with MongoDB.

```
const subjectSchema = new mongoose.Schema({ ... }, { timestamps: true });
```

- This defines a new schema for the **`subject`** collection with timestamps enabled. Timestamps automatically add **`createdAt`** and **`updatedAt`** fields to the schema.

- **`subName:`** A required field of type **`String`** that stores the subject name.
- **`subCode:`** A required field of type **`String`** that stores the subject code.
- **`sessions:`** A required field of type **`String`** that stores the number of sessions.
- **`sclassName:`** A reference field that stores an **`ObjectId`** linking to the **`sclass`** collection. This is required.
- **`school:`** A reference field that stores an **`ObjectId`** linking to the **`admin`** collection.
- **`teacher:`** A reference field that stores an **`ObjectId`** linking to the **`teacher`** collection.

```
module.exports = mongoose.model("subject", subjectSchema);
```

- This line creates a Mongoose model named **`"subject"`** using the **`subjectSchema`** and exports it. The model provides an interface for interacting with the **`subject`** collection in the MongoDB database.

#### backend/models/teacherSchema.js

```
const mongoose = require("mongoose");
```

- This line imports the **`mongoose`** library, which is used to interact with MongoDB.

```
const teacherSchema = new mongoose.Schema({ ... }, { timestamps: true });
```

- This defines a new schema for the **`teacher`** collection with timestamps enabled. Timestamps automatically add **`createdAt`** and **`updatedAt`** fields to the schema.

```
name: {
    type: String,
    required: true
},
```

- **`name`** is a required field of type **`String`** that stores the teacher's name.

```
email: {
    type: String,
    unique: true,
    required: true
},
```

- **`email`** is a required field of type **`String`** that stores the teacher's email address. It must be unique.

```
password: {
    type: String,
    required: true
},
```

- **`password`** is a required field of type **`String`** that stores the teacher's password.

```
role: {
    type: String,
    default: "Teacher"
},
```

- **`role`** is a field of type **`String`** that stores the teacher's role, defaulting to "Teacher".

```
school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'admin',
    required: true
},
```

- **`school`** is a reference field that stores an **`ObjectId`** linking to the **`admin`** collection, which represents the school. This field is required.

```
teachSubject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'subject'
},
```

- **`teachSubject`** is a reference field that stores an **`ObjectId`** linking to the **`subject`** collection.

```
teachSclass: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'sclass',
    required: true
},
```

- **`teachSclass`** is a reference field that stores an **`ObjectId`** linking to the **`sclass`** collection. This field is required.

```
attendance: [{
    date: {
        type: Date,
        required: true
    },
    presentCount: {
        type: String
    },
    absentCount: {
        type: String
    }
}]
```

- **`attendance`** is an array of objects, where each object stores:
  - **`date:`** A required field of type **`Date`** that stores the attendance date.
  - **`presentCount:`** A field of type **`String`** that stores the count of present students.
  - **`absentCount:`** A field of type **`String`** that stores the count of absent students.

```
{ timestamps: true }
```

- This option adds **`createdAt`** and **`updatedAt`** fields to the schema automatically.

```
module.exports = mongoose.model("teacher", teacherSchema);
```

- This line creates a Mongoose model named **`"teacher"`** using the **`teacherSchema`** and exports it. The model provides an interface for interacting with the **`teacher`** collection in the MongoDB database.

#### backend/routes/route.js

```
const router = require('express').Router();
```

- This line imports the Router from the Express framework and assigns it to the **`router`** constant. This router will be used to define routes for different endpoints.

```
const { adminRegister, adminLogIn, getAdminDetail} = require('../controllers/admin-controller.js');
const { sclassCreate, sclassList, deleteSclass, deleteSclasses, getSclassDetail, getSclassStudents } = require('../controllers/class-controller.js');
const { complainCreate, complainList } = require('../controllers/complain-controller.js');
const { noticeCreate, noticeList, deleteNotices, deleteNotice, updateNotice } = require('../controllers/notice-controller.js');
const {
    studentRegister,
    studentLogIn,
    getStudents,
    getStudentDetail,
    deleteStudents,
    deleteStudent,
    updateStudent,
    studentAttendance,
    deleteStudentsByClass,
    updateExamResult,
    clearAllStudentsAttendanceBySubject,
    clearAllStudentsAttendance,
    removeStudentAttendanceBySubject,
    removeStudentAttendance } = require('../controllers/student_controller.js');
const { subjectCreate, classSubjects, deleteSubjectsByClass, getSubjectDetail, deleteSubject, freeSubjectList, allSubjects, deleteSubjects } = require('../controllers/subject-controller.js');
const { teacherRegister, teacherLogIn, getTeachers, getTeacherDetail, deleteTeachers, deleteTeachersByClass, deleteTeacher, updateTeacherSubject, teacherAttendance } = require('../controllers/teacher-controller.js');
```

- These lines import specific functions from various controller files. Each controller file handles specific functionality related to different entities such as **`admin`**, **`class`**, **`complain`**, **`notice`**, **`student`**, **`subject`**, and **`teacher`**.

```
// Admin
router.post('/AdminReg', adminRegister);
router.post('/AdminLogin', adminLogIn);
router.get("/Admin/:id", getAdminDetail);
```

- **POST /AdminReg:** Registers a new admin using the **`adminRegister`** function.
- **POST /AdminLogin:** Logs in an admin using the **`adminLogIn`** function.
- **GET /Admin/:** Retrieves admin details using the **`getAdminDetail`** function.

```
// Student
router.post('/StudentReg', studentRegister);
router.post('/StudentLogin', studentLogIn);
router.get("/Students/:id", getStudents);
router.get("/Student/:id", getStudentDetail);
router.delete("/Students/:id", deleteStudents);
router.delete("/StudentsClass/:id", deleteStudentsByClass);
router.delete("/Student/:id", deleteStudent);
router.put("/Student/:id", updateStudent);
router.put('/UpdateExamResult/:id', updateExamResult);
router.put('/StudentAttendance/:id', studentAttendance);
router.put('/RemoveAllStudentsSubAtten/:id', clearAllStudentsAttendanceBySubject);
router.put('/RemoveAllStudentsAtten/:id', clearAllStudentsAttendance);
router.put('/RemoveStudentSubAtten/:id', removeStudentAttendanceBySubject);
router.put('/RemoveStudentAtten/:id', removeStudentAttendance);
```

- **POST /StudentReg:** Registers a new student using the **`studentRegister`** function.
- **POST /StudentLogin:** Logs in a student using the **`studentLogIn`** function.
- **GET /Students/:** Retrieves a list of students (possibly by class or another criteria) using the **`getStudents`** function.
- **GET /Student/:** Retrieves student details using the **`getStudentDetail`** function.
- **DELETE /Students/:** Deletes multiple students using the **`deleteStudents`** function.
- **DELETE /StudentsClass/:** Deletes students by class using the **`deleteStudentsByClass`** function.
- **DELETE /Student/:** Deletes a specific student using the **`deleteStudent`** function.
- **PUT /Student/:** Updates a student's details using the **`updateStudent`** function.
- **PUT /UpdateExamResult/:** Updates exam results for a student using the **`updateExamResult`** function.
- **PUT /StudentAttendance/:** Updates student attendance using the **`studentAttendance`** function.
- **PUT /RemoveAllStudentsSubAtten/:** Clears all students' attendance for a specific subject using the **`clearAllStudentsAttendanceBySubject`** function.
- **PUT /RemoveAllStudentsAtten/:** Clears all students' attendance using the **`clearAllStudentsAttendance`** function.
- **PUT /RemoveStudentSubAtten/:** Removes a student's attendance for a specific subject using the **`removeStudentAttendanceBySubject`** function.
- **PUT /RemoveStudentAtten/:** Removes a student's attendance using the **`removeStudentAttendance`** function.

```
// Teacher
router.post('/TeacherReg', teacherRegister);
router.post('/TeacherLogin', teacherLogIn);
router.get("/Teachers/:id", getTeachers);
router.get("/Teacher/:id", getTeacherDetail);
router.delete("/Teachers/:id", deleteTeachers);
router.delete("/TeachersClass/:id", deleteTeachersByClass);
router.delete("/Teacher/:id", deleteTeacher);
router.put("/TeacherSubject", updateTeacherSubject);
router.post('/TeacherAttendance/:id', teacherAttendance);
```

- **POST /TeacherReg:** Registers a new teacher using the **`teacherRegister`** function.
- **POST /TeacherLogin:** Logs in a teacher using the **`teacherLogIn`** function.
- **GET /Teachers/:** Retrieves a list of teachers (possibly by class or another criteria) using the **`getTeachers`** function.
- **GET /Teacher/:** Retrieves teacher details using the **`getTeacherDetail`** function.
- **DELETE /Teachers/:** Deletes multiple teachers using the **`deleteTeachers`** function.
- **DELETE /TeachersClass/:** Deletes teachers by class using the **`deleteTeachersByClass`** function.
- **DELETE /Teacher/:** Deletes a specific teacher using the **`deleteTeacher`** function.
- **PUT /TeacherSubject:** Updates a teacher's subject using the **`updateTeacherSubject`** function.
- **POST /TeacherAttendance/:** Updates teacher attendance using the **`teacherAttendance`** function.

```
// Notice
router.post('/NoticeCreate', noticeCreate);
router.get('/NoticeList/:id', noticeList);
router.delete("/Notices/:id", deleteNotices);
router.delete("/Notice/:id", deleteNotice);
router.put("/Notice/:id", updateNotice);
```

#### backend/index.js

```
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
// const bodyParser = require("body-parser")
const app = express()
const Routes = require("./routes/route.js")
```

- const express = require("express"): This imports the Express library, which is a web application framework for Node.js. It helps in creating a server and handling HTTP requests.
- const cors = require("cors"): This imports the CORS (Cross-Origin Resource Sharing) middleware, which allows you to specify which domains are permitted to access resources on your server.
- const mongoose = require("mongoose"): This imports Mongoose, an ODM (Object Data Modeling) library for MongoDB and Node.js, which provides a schema-based solution to model your application data.
- const dotenv = require("dotenv"): This imports the dotenv library, which loads environment variables from a .env file into process.env, helping to keep sensitive information like database credentials out of your codebase.
- const bodyParser = require("body-parser"): This line is commented out. It would import the bodyParser middleware if uncommented. BodyParser is used to parse incoming request bodies in a middleware before your handlers, available under req.body.
- const app = express(): This creates an Express application instance, which will be used to define routes, middleware, and start the server.
- const Routes = require("./routes/route.js"): This imports the routes defined in the ./routes/route.js file. It is assumed that this file contains route handlers for your application.

```
const PORT = process.env.PORT || 5000
```

- const PORT = process.env.PORT || 5000: This sets the port number for the server. It checks if there's a PORT environment variable set; if not, it defaults to port 5000.

```
dotenv.config();
```

- dotenv.config();: This initializes dotenv to load environment variables from the .env file into process.env.

```
app.use(bodyParser.json({ limit: '10mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
```

- // app.use(bodyParser.json({ limit: '10mb', extended: true })): These lines are commented out. If uncommented, they would use the bodyParser middleware to parse JSON request bodies, with a limit of 10 MB.
- // app.use(bodyParser.urlencoded({ limit: '10mb', extended: true })): Similarly, this would use bodyParser to parse URL-encoded request bodies with a 10 MB limit.

```
app.use(express.json({ limit: '10mb' }))
app.use(cors())
```

- app.use(express.json({ limit: '10mb' })): This middleware parses incoming requests with JSON payloads and sets a maximum request body size of 10 MB.
- app.use(cors()): This enables CORS for all routes, allowing resources to be accessed from different origins.

```
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err))
```

- mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }): This connects to a MongoDB database using the URL specified in the MONGO_URL environment variable. useNewUrlParser and useUnifiedTopology are options to use the new connection string parser and the unified topology engine, respectively.
- .then(console.log("Connected to MongoDB")): If the connection is successful, this logs "Connected to MongoDB" to the console.
- .catch((err) => console.log("NOT CONNECTED TO NETWORK", err)): If the connection fails, this logs an error message along with the error details.

```
app.use('/', Routes);
```

- app.use('/', Routes);: This sets up the middleware for handling routes. All routes defined in the Routes module will be accessible from the root path.

```
app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})
```

- app.listen(PORT, () => { console.log(Server started at port no. ${PORT}) }): This starts the server and listens for incoming requests on the specified port. It logs a message to the console indicating that the server is running and listening on the specified port.

## CONTRIBUTOR

- [Bhavdeep Singh Nijhawan](https://www.linkedin.com/in/bhavdeep-singh-nijhawan-739634280)

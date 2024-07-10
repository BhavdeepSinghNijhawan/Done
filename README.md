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

## CONTRIBUTOR

- [Bhavdeep Singh Nijhawan](https://www.linkedin.com/in/bhavdeep-singh-nijhawan-739634280)

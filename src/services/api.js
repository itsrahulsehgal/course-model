const courses = [
    {
        "id": 1,
        "name": "Introduction to React Native",
        "instructor": "John Doe",
        "description": "Learn the basics of React Native development and build your first mobile app.",
        "enrollmentStatus": "Open",
        "thumbnail": "your.image.here",
        "duration": "8 weeks",
        "schedule": "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
        "location": "Online",
        "prerequisites": ["Basic JavaScript knowledge", "Familiarity with React"],
        "syllabus": [
            {
                "week": 1,
                "topic": "Introduction to React Native",
                "content": "Overview of React Native, setting up your development environment."
            },
            {
                "week": 2,
                "topic": "Building Your First App",
                "content": "Creating a simple mobile app using React Native components."
            }
            // Additional weeks and topics...
        ],
        "students": [
            {
                "id": 101,
                "name": "Alice Johnson",
                "email": "alice@example.com"
            },
            {
                "id": 102,
                "name": "Bob Smith",
                "email": "bob@example.com"
            }
            // Additional enrolled students...
        ]
    },
    {
        "id": 2,
        "name": "Introduction to React JS",
        "instructor": "Jane Smith",
        "description": "Explore the fundamentals of React JS and learn to build interactive user interfaces.",
        "enrollmentStatus": "Open",
        "thumbnail": "your.another.image.here",
        "duration": "6 weeks",
        "schedule": "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
        "location": "Online",
        "prerequisites": ["Basic HTML and CSS knowledge", "Understanding of JavaScript"],
        "syllabus": [
            {
                "week": 1,
                "topic": "Getting Started with React",
                "content": "Introduction to React, understanding components and JSX."
            },
            {
                "week": 2,
                "topic": "State and Props",
                "content": "Managing state and props in React applications."
            },
            // Additional weeks and topics...
        ],
        "students": [
            {
                "id": 201,
                "name": "Charlie Brown",
                "email": "charlie@example.com"
            },
            {
                "id": 202,
                "name": "Diana Miller",
                "email": "diana@example.com"
            }
            // Additional enrolled students...
        ]
    },
    {
        "id": 3,
        "name": "Introduction to Node.js",
        "instructor": "Samuel Lee",
        "description": "Learn the basics of Node.js and how to build scalable server-side applications.",
        "enrollmentStatus": "Open",
        "thumbnail": "your.nodejs.image.here",
        "duration": "10 weeks",
        "schedule": "Fridays, 6:30 PM - 8:30 PM",
        "location": "Online",
        "prerequisites": ["Intermediate JavaScript knowledge", "Basic understanding of web development"],
        "syllabus": [
            {
                "week": 1,
                "topic": "Introduction to Node.js",
                "content": "Overview of Node.js, setting up a development environment."
            },
            {
                "week": 2,
                "topic": "Building a Simple Web Server",
                "content": "Creating a basic web server using Node.js."
            },
            // Additional weeks and topics...
        ],
        "students": [
            {
                "id": 301,
                "name": "Eva Davis",
                "email": "eva@example.com"
            },
            {
                "id": 302,
                "name": "Frank Johnson",
                "email": "frank@example.com"
            }
            // Additional enrolled students...
        ]
    },
    {
        "id": 4,
        "name": "Introduction to Flutter",
        "instructor": "Jessica Martinez",
        "description": "Discover the power of Flutter for cross-platform mobile app development.",
        "enrollmentStatus": "Open",
        "thumbnail": "your.flutter.image.here",
        "duration": "7 weeks",
        "schedule": "Saturdays, 10:00 AM - 12:00 PM",
        "location": "Online",
        "prerequisites": ["Basic programming knowledge", "Familiarity with Dart programming language"],
        "syllabus": [
            {
                "week": 1,
                "topic": "Getting Started with Flutter",
                "content": "Introduction to Flutter, setting up your first Flutter project."
            },
            {
                "week": 2,
                "topic": "Building UI with Widgets",
                "content": "Understanding Flutter widgets and creating a user interface."
            },
            // Additional weeks and topics...
        ],
        "students": [
            {
                "id": 401,
                "name": "Grace Taylor",
                "email": "grace@example.com"
            },
            {
                "id": 402,
                "name": "Harry Walker",
                "email": "harry@example.com"
            }
            // Additional enrolled students...
        ]
    },
    {
        "id": 5,
        "name": "Introduction to Next.js",
        "instructor": "Daniel Reynolds",
        "description": "Explore the fundamentals of Next.js for building modern and dynamic web applications.",
        "enrollmentStatus": "Open",
        "thumbnail": "your.nextjs.image.here",
        "duration": "9 weeks",
        "schedule": "Wednesdays and Fridays, 5:30 PM - 7:30 PM",
        "location": "Online",
        "prerequisites": ["Basic knowledge of HTML, CSS, and JavaScript"],
        "syllabus": [
            {
                "week": 1,
                "topic": "Introduction to Next.js",
                "content": "Overview of Next.js, setting up a Next.js project."
            },
            {
                "week": 2,
                "topic": "Routing and Navigation",
                "content": "Implementing navigation and routing in Next.js applications."
            },
            // Additional weeks and topics...
        ],
        "students": [
            {
                "id": 501,
                "name": "Ivy Adams",
                "email": "ivy@example.com"
            },
            {
                "id": 502,
                "name": "Jack Turner",
                "email": "jack@example.com"
            }
            // Additional enrolled students...
        ]
    }
            
    

];

export const fetchCourses = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(courses);
      }, 1000);
    });
  };

# Comments Application

## Intro

Hej! Detta är min React App som pushar upp dina kommentarer och svar till en lokal mySQL server som du hostar på din dator, som sedan hämtar ner data och visar upp den i ett snyggt kommentarsfält. Tack för att ni tar er tiden att kika igenom min kod! Allt gott, William, er framtida kollega ;)

## Kod som är intressant för dig

```
backend
└───src
    └───database
        └───connection.js                   # Connects sequelize to mySql
        └───execution.js                    # Creates connection to the server
    └───server.js                           # Server model and GET/POST endpoints


frontend
└───components
    └───Comment.tsx                         # Comment styling
    └───Comments.tsx                        # Mapping all replies from database
    └───CommentForm.tsx                     # Creating a new post to our database
    └───Post.tsx                            # Styling for all NEW posts
    └───Posts.tsx                           # Mapping all posts and and filters New posts, and replies
    └───ReplyInput                     # Handles posting replies to existing comments
└───redux
    └───actions
        └───comments.tsx                    # Handles all redux actions (both postCommets and fetchComments)
    └───reducers
        └───commetsReducer.tsx              # Handles all reducers
```

### Prerequisites:

- CommandLine/Terminal installerat på din dator
- NodeJS version 14.18.1+
- NPM version 8.3.0+ CLI installerat
- GIT CLI installed

### To run locally:

1. Install a MySQL Server https://dev.mysql.com/downloads/mysql/
2. When you install a MySQL Server, set the Database Password to “root1234”
3. Open a Commandline Window
4. run `git clone https://github.com/WilliamGranath/QTE-kodtest.git`
5. navigate to backend folder `cd backend`
6. run `npm i` to install all dependencies
7. run `node src/database/connection.js`
8. run `node src/database/execute.js`
9. run `node src/server.js` or `npm start`
10. Open a new Commandline window
11. navigate to frondend folder `cd ../frontend`
12. run `npm i` to install all dependencies
13. run `npm start`

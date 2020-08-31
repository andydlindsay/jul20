# W05D05 - Midterm Project Kickoff

### What are we getting out of this?
* Learning to work as a team
* Solidify your knowledge

1. Choose a project

2. Turn our requirements into user stories

### User Story
* Describes how a user would interact with our app
* As a _____, I can _____, because ______
* As a user, I can see a list of maps, because I am interested in local things (craft breweries)
* As a logged in user, I can see maps that I have created, because I want to be able to edit them
* As a non-logged in user, I should not be able to see maps, because they don't belong to me

* As a logged in user, I can favourite a map, because I want to see it later AND the heart icon turns red

### Entities
* Nouns become tables
* ERD's

### Routes
* Pathways to our data
* Follow RESTful conventions

Forms
GET /menuitems/new
GET /menuitems/:id/edit

B  GET  /menuitems
R  GET  /menuitems/:id
E  POST /menuitems/:id
A  POST /menuitems
D  POST /menuitems/:id/delete

### MVP
* Most Valuable Player
* Most Valuable Primate
* Minimum Viable Product

* MVD Minimum Viable Demo
* If you're not going to demo it, don't build it

### Wireframes
* Mockups
* Show the minimum amount of information that any member of your team can implement

### User Login
* DON'T DO IT

```js
app.get('/login/:id', (req, res) => {
  req.session.user_id = req.params.id;
  res.redirect('/');
});
```

### Tech Choices
* BE: Node, Express, Postgres
* FE: HTML, CSS, JS, Sass, jQuery

### SPA vs Multi-page
* Not mutually exclusive

### Git
* Merge conflicts happen
* Use branches
* DO NOT CODE ON MASTER

### Splitting up the work
* Horizontally
* Vertically
* Pair Programming

PostMan gui curl

### Communication
* Utmost importance
* Make sure you're doing it

### Deployment
* Up to you and your group

Kanban
To Do
In Progess
Complete

Planning directory
UserStories.md
Routes.md
MockupOne.png
ERD.png






# 

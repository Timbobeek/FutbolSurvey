### How to run

npm start opens the page on pc  
use zrok for other devices: 1. run zrok share public http://localhost1234 2. open generated zrok link on another device

### Things to work on

- [x] Currently, any user can sign in under different emails, should be some verification process to prevent that
- [x] Border radius seems just a tad bit off around the question number -> ended up removing 
- [x] The number form for the age question will convert to NaN when you hit backspace
- [ ] Make it so that you can only edit/delete your own entry
- [x] Get clean green GitHub and LinkedIn logos (noticeable on phone)
- [ ] Selected radio-buttons or checkboxes stay darker on phone
- [x] Remove console logs from the survey code
- [ ] Production socials
- [ ] Production database
- [ ] Results do not seem to be in any specific order
- [x] Page not found text for nonexistent routes? (maybe use a fun image for it)
- [x] Redirect to localhost home page (should be home page of domain)

### New features?

For multiple choice questions, generate a result pie/diagram that is shown in the results?  
Add quizzes later  
Add a page for weird/random facts  
Little pop-up on home page explaining why this page was made  
Registered users get verified by email about new surveys  
Topic discussions (like would you wear AG shoes on turf, etc)

### Backend

Poll data:

```diff
{
  Name: "Billy Johnson",
  Favorite position to play: ---> radio button (4 options [ Goalkeeper, Defender, Midfielder, Striker ], can choose one),
  Favorite player: "Mo Salah",
  Ronaldo or Messi? : ---> radio button (3 options [Ronaldo, Messi, HATE BOTH], can choose one),
  Favorite club team: "Barcelona",
  Favorite national team: "Australia",
  Favorite league: "Bundesliga",
  Favorite jersey you own: "2005 Barcelona Puyol" (option to upload an image),
  Favorite soccer memory as a player: "Scored a double in an important game",
  Worst soccer memory as a player: "Broke my leg in 2003",
  Favorite soccer memory as a spectator: "2006 World Cup",
  Worst soccer memory as a spectator: "Chelsea losing to Man United in 2008 CL Final",
  I started playing at: "7",
  I started playing because: "My dad was a coach",
  Levels I played at: ---> chekboxes, can choose any/all [Amateur, Pro Youth Academy, High School, College, Semi-Pro, Pro],
  Biggest achievement so far: "Won State with City High in 2016",
  Soccer dream/goal: "Want to win the world cup",
  Best soccer advice you have received: "Listen to your heart",
  Favorite pair of cleats: "Nike Total 90",
  Favorite ball: "Brazuca",
  Jabulani is: ---> radio button (3 options [Trash, Love it, No idea], can choose one),
  Best compliment ever received: "You are the best"
}
```

#### Backend data

```json
{
    "name": "aa",
    "position": "",
    "favplayer": "",
    "mr": "",
    "favclub": "",
    "natteam": "",
    "favleague": "",
    "favjersey": "",
    "favmemspec": "",
    "wrsmemspec": "",
    "favmemplr": "",
    "wrsmemplr": "",
    "age": "",
    "why": "",
    "amateur": false,
    "hs": false,
    "acad": false,
    "college": false,
    "semipro": false,
    "pro": false,
    "achv": "",
    "goals": "",
    "advc": "",
    "clt": "",
    "ball": "",
    "jabu": "",
    "love": ""
}
```

### Figma Design

https://www.figma.com/file/e4kXYBl9MppgQWbkeM4kse/Untitled?type=design&node-id=0-1&mode=design&t=MGOl7xFL5Ux87A8o-0 


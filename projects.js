const JS = 'javascriptTag',
  NODE = 'backendTag',
  CSS = 'cssTag',
  CLIENT = 'clientTag',
  JSX = 'reactTag',
  SVELTE = 'svelteTag',
  VUE = 'vueTag',
  PHP = 'phpTag',
  HTML5 = 'semanticHtmlTag'


const projects = [
  {
    image: "horiseon.png",
    title: "Horiseon Code Refactor",
    desc: [
      'A project where I refactor the code semantically.',
      'This was a unique challenge because I have never worked with semantic HTML before. After refactoring the code it was so neat to realize how everything connects from an accessibility stand point. When I worked at Apple I do a ton of work with screen readers this really opened up my eyes a bit more to see how third party factors really come into play.'
      ],
    github: "https://github.com/DevJonTaylor/refactor-horiseon-octo/",
    deployed:  "https://devjontaylor.github.io/refactor-horiseon-octo/",
    tags: [ HTML5 ]
  },
  {
    image: 'password.png',
    title: 'Password Generator',
    desc: [
      'I utilized Object Orientated Programming for this project.',
      'Taking ES6 ideas, the code for this project was done with less than 120 lines of code. I learned a bit about JSDoc and successfully created a password generator. I ran into one problem where the password was not always including all of the requested characters. I was able to solve this by using a proper shuffle after ensuring all of the requested characters were included.'
      ],
    github: 'https://github.com/DevJonTaylor/password-randomizy/',
    deployed: 'https://devjontaylor.github.io/password-randomizy/',
    tags: [ JS ]
  },
  {
    image: 'code.quiz.png',
    title: 'Code Quiz',
    desc: [
      'I learned about state management in this project. I used objects to manage the quiz, timer saving the score to the localStorage so you can set this up in a device and share it.',
      'I ran into a small challenge where I did not document properly as I took breaks and came back not knowing what was what?! So as I restarted this projected I learned to utilize TODO and documentation before I created the methods actual code so I knew what was what.'
    ],
    github: 'https://github.com/DevJonTaylor/furry-octo-waddle/',
    deployed: 'https://devjontaylor.github.io/furry-octo-waddle/',
    tags: [ JS, HTML5, CSS ]
  },
  {
    image: 'work.day.scheduler.png',
    title: 'Work Day Scheduler',
    desc: [
      'Ensuring user interaction for confirmation and objects to ensuring everything is working properly. I successfully created a basic day planner.',
      'I got a small taste of TypeScript definitions here and loved it. I applied them to the JSDoc and really allows for great understanding of the code itself. While applying a object based environment I had so much fun here!'
    ],
    github: 'https://github.com/DevJonTaylor/cuddly-planner/',
    deployed: 'https://devjontaylor.github.io/cuddly-planner/',
    tags: [ JS, HTML5, CSS ]
  },
  {
    image: 'weather.dashboard.png',
    title: 'Weather Dashboard',
    desc: [
      'A weather dashboard that uses OpenWeatherApi and MapBox as a service to provide a six day forecast.',
      'Kicking it off I implemented a View object that also acts as a Model object. I did this with two different objects. I did this with the MapBox object that acted as the auto-complete for the user.',
      'Once a location was selected this did two things. First it added a location to the history. This model/view/controller object recorded and managed the history as well as sent the view to the DOM. When the object was added to a string the toString kicked in and it provided the HTML needed to create the buttons for the history. This was a new concept for me as I had never utilized the toString and it was really neat. However a bit confusing took everything was happening inside one object. I did the same thing for the object that handled the weather data that came in. In the future I will be utilizing data in the Model object, the HTML in the view model, and controller will work with events and communication. The project was successful and loads of fun learning these new concepts!'
    ],
    github: 'https://github.com/DevJonTaylor/jon-weather-forecast/',
    deployed: 'https://devjontaylor.github.io/jon-weather-forecast/',
    tags: [ JS, HTML5 ]
  },
  {
    image: 'goat.scale.png',
    title: 'G.O.A.T. Scale',
    desc: [
      'A group project that uses ESPN and Giphy API to bring check stats and you check to see if the player you selected is better than the computer.',
      'I was in charge of bringing in the ESPN data which I used models to receive and provide data. I then created objects to control what the data did and views to display the data. This was so much fun being able to collaborate with others and build something neat! A challenge here would easily be the vague documentation available on ESPN\'s API. So I created TypeScript definitions that allowed me to define what to expect from each endpoint. This also allowed me the ability to see what data is available and what data is not available from each endpoint.',
      'Some points I would change would be better documentation on my end. I feel as though I should have created a better documentation for each object. I might go back later and create a repo just for these as it really ended up being more of an Software Development Kit(SDK).'
    ],
    github: 'https://github.com/DevJonTaylor/wing-map/',
    deployed: 'https://devjontaylor.github.io/wing-map/',
    tags: [ JS ]
  },
  {
    image: 'note.taker.png',
    title: 'Note Taker',
    desc: [
      'The purpose of this app was to allow a way to create a note that could be saved on the server side.  With the ability to utilize Create, Read, Update, and Delete (CRUD) this was a total success.  It checks for state has changed from the what was received from the server.  Was so much fun!',
      'This was a ton of fun as I was able to create a Svelte with Express.  Not really needing to utilize a database made the backend so easy to create.',
      'I ran into a few issues with CORS because I was running a view server and an API server.  Svelte\'s built in State Store was unique and different, but I think it is easier to use then Redux and Vuex from a learning curve stand point.',
      'All in all this was a total blast to create and will be looking for projects to implement Svelte in the future for sure!'
    ],
    github: 'https://github.com/DevJonTaylor/serve-meh-notes',
    deployed: 'https://serve-meh-notes.herokuapp.com/',
    tags: [ SVELTE, JS, HTML5, CSS ]
  },
  {
    image: 'plantazzle.png',
    title: 'Plantazzle',
    desc: [
      'A group project that in the long run is going to be the last stop for critical assistance with plant care.',
      'I was in charge of Models/Database setup and control with the project. I learned a ton about Sequelize as it was my very first time ever using it. I learned about cyclic dependency as I was trying to import all of the different associated models into the same model file. This was a little tricky as I would have preferred to keep all of the included models in the same module.',
      'We also had someone leave at the beginning of the project which made this a little unique and unexpected. So we had to re-arrange the roles a bit and of course some expected features were left out to meet the release time. I helped with view side of things which really interesting as it was my first time using Handlebars, reminded me a bit of react and so I created a set of components for the form and modals to keep things streamlined.'
    ],
    github: 'https://github.com/DevJonTaylor/plantazzle/',
    deployed: 'https://salty-dawn-76084.herokuapp.com/',
    tags: [ JS, HTML5, NODE ]
  },
  {
    image: 'neuropype.png',
    title: 'Subscription Management System',
    desc: [
      'Management of user base was located in Keygen.sh, manipulating Joomla\'s built-in so that after authentication they were able to access the forums as they were a Joomla user.  Subscription payments were performed from Stripe.  Was a very challenging project.',
      'From the backend I created a token system that managed Stripe payments and Keygen\'s authorization.  I created a Software Development Kit(SDK) to work with Keygen as they did not have a PHP kit available that worked with licenses.',
      'I used Vue as the frontend framework and really nice and easy to work with.  As my first Vue project I wish I would have discovered Vuex before hand.  It would have made my life so much easier instead of performing prop passing.'
    ],
    tags: [ JS, VUE, PHP, CLIENT ]
  }
]

const tags = [
  {
    name: JS,
    isOn: true
  },
  {
    name: NODE,
    isOn: true
  },
  {
    name: CSS,
    isOn: true
  },
  {
    name: CLIENT,
    isOn: true
  },
  {
    name: JSX,
    isOn: true
  },
  {
    name: SVELTE,
    isOn: true
  },
  {
    name: VUE,
    isOn: true
  },
  {
    name: PHP,
    isOn: true
  },
  {
    name: HTML5,
    isOn: true
  }
]

export { projects, tags, JS, NODE, CSS, CLIENT, JSX, SVELTE, VUE, PHP, HTML5 }
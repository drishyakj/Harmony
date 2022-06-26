var quotes = ['Our greatest glory is not in never falling, but in rising every time we fall.',
  'Don’t let life discourage you; everyone who got where he is had to begin where he was.',
  'You can have it all. Just not all at once',
  'Happiness is a butterfly, which when pursued, is always just beyond your grasp, but which, if you will sit down quietly, may alight upon you.',
  'Not all positive changes feel positive in the beginning.',
  'Trust yourself. You know more than you think you do.',
  'Decide what you want, believe you can have it, believe you deserve it and believe it’s possible for you.',
  'Don\'t sit down and wait for the opportunities to come. Get up and make them.',
  'All dreams are within reach. All you have to do is keep moving towards them.',
  'Believe you can and you are halfway there.'
];
var randomNumber = Math.floor(Math.random() * 10) + 1;
var thought = quotes[randomNumber];
$("h1").text(thought);

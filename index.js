const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  // use the .map method on the tutorials to return a new array
  let out = [];

  for(let i = 0; i<tutorials.length;i++) {
    let res = "";
    tutorials[i].split(" ").map(function(word){
     let a = word.charAt(0).toUpperCase() + word.slice(1);
      res = res + a + " "
    });
  
    out.push(res.splice(0,-1))
  }
  return out
}

//titleCased()

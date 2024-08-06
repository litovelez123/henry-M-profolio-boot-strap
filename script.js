//console.log("hello world")

//var prompt = prompt("what is your name?");

 // console.log(prompt)



function verifyage (age ) {
  var age = prompt("what is your age?");
  console.log(age)

  if (age > 18 ) {
   alert('you are a minor!') 
  } else if (age >= 18 && age <= 60) {
   alert('your are and adult!') 
  } else {
    alert('you are a senior citizen!')
  }
}
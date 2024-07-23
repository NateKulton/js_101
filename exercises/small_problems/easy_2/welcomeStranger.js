function greetings(nameArr, jobObj) {
  let nameStr = nameArr.join(' ');
  let jobStr = Object.values(jobObj).join(' ');
  return 'Hello, ' + nameStr + '!' + ' Nice to have a ' + jobStr + ' around.';
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

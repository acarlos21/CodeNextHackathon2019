//
let jobs = {
  // "one":{
  //   "title": "Mobile App developer",
  //   "Entry-level hourly wage":"$29.64",
  //   "Typical qualifications" : "Associate's or Bachelor's degree",
  // },
  //
  // "two":{
  //   "title": "Wind Energy Technician",
  //   "Entry-level hourly wage":"$27.88",
  //   "Typical qualifications" : "Associate's degree",
  // },

  // "three":{
  //   "title": "Computer Network Support Specialist",
  //   "Entry-level hourly wage":"$18.40",
  //   "Typical qualifications" : "Associate's degree",
  // },

  // "four":{
  //   "title": "Web Designer or Devloper",
  //   "Entry-level hourly wage":"$18.24",
  //   "Typical qualifications" : "Associate's degree or Bachelor's degree",
  // },

  // "five":{
  //   "title": "Mechanical Engineering Technician",
  //   "Entry-level hourly wage":"$16.78",
  //   "Typical qualifications" : "Bachelor degree",
  // },

  // "six":{
  //   "title": "Marketing Specialist",
  //   "Entry-level hourly wage":"$16.50",
  //   "Typical qualifications" : "Bachelor's degree",
  // },

  "seven":{
    "title": "Oil and Gas Derrick Operator",
    "Entry-level hourly wage":"$16.01",
    "Typical qualifications" : "High school diploma or Vocational certifate",
  },

  "eight":{
    "title": "Electrian",
    "Entry-level hourly wage":"$15.84",
    "Typical qualifications" : "Vocational certifatea and paid apprenticeship",
  },

  "nine":{
    "title": "Commercial Diver",
    "Entry-level hourly wage":"$14.81",
    "Typical qualifications" : "Scuba Certification and vocational certification",
  },

  "ten":{
    "title": "Plumber",
    "Entry-level hourly wage":"$15.43",
    "Typical qualifations": "Vocational certificate and paid apprenticeship",
  },

  "eleven":{
    "title": "Writer",
    "Entry-level hourly wage":"$15.24",
    "Typical qualifications" : "Bachelor's degree is often preffered not always necessary",
  },

  "twelve":{
    "title": "Grapic Designer",
    "Entry-level hourly wage":"$14.23",
    "Typical qualifications" : "Associate's or Bachelor's degree",
  },

  "thirteen":{
    "title": "Capenter",
    "Entry-level hourly wage":"$13.87",
    "Typical qualifications" : "Vocational certifate and a paid apprenticeship",
  },

  "fourteen":{
    "title": "Substance Abuse Counselor",
    "Entry-level hourly wage":"$13.58",
    "Typical qualifications" : "Anything from a post-secondary certificate to a master's degree (depending on the particular state, employer, and position)",
  },

}
var jobArray = Object.values(jobs);

console.log(jobArray);

for (x of jobArray) {
	var paragraph = document.createElement("p");

  var text = "Job Title" + x[]
    var node = document.createTextNode(x);
    paragraph.appendChild(node);

    var element = document.getElementById("job");
	element.appendChild(paragraph);
}

//resume data in json format

var resume = {
    my_name: "ganesan",
    Email: "ganeshlogu644@gamil.com",
    Date_of_birth: "25.3.1999",
    Gender:"Male",
    Natinality: "Indian",
    Martial_status: "single",
    Languages_known: ["English","Tamil"],
    Age:24,
    Marks:{ "B.E":"CGPA 7.35", "Higer secondary": "56.7",SSLC: "72"},
    Qualification: "B.E Mechanical",
    Key_strength: ["motivated","honesty","work ethic"],
    Personal_hobbies:["watching Movies","watch gameplay"],

};

var resume_JSON_Format = JSON.stringify(resume);
console.log(resume_JSON_Format);

//for json iterate over all loops(for,for in,for of, for each)

var json_data = {
    my_name: "ganesan",
    Email: "ganeshlogu644@gamil.com",
    Date_of_birth: "25.3.1999",
    Gender:"Male",
    Natinality: "Indian",
    Martial_status: "single",
    Languages_known: ["English","Tamil"],
    Age:24,
    Marks:{ "B.E":"CGPA 7.35", "Higer secondary": "56.7",SSLC: "72"},
    Qualification: "B.E Mechanical",
    Key_strength: ["motivated","honesty","work ethic"],
    Personal_hobbies:["watching Movies","watch gameplay"],

};
const count = Object.keys(json_data);


//for loop
for (let i = 0; i < count.length; i++){
    console.log(json_data[count[i]]);
}

//for in
for (let keys in json_data) {
    console.log(json_data[keys]);
}

//for of 
for(let i of count) {
    console.log(json_data[i]);
}

//for each
count.forEach(values);
function values(item) {
    console.log(json_data[item]);
}
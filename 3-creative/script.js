const d = new Date();
let day = d.getDay();
let date = d.getDate();
let month = d.getMonth();

const time = document.querySelector(".date");

let dayarr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ,"Sunday"];

let montharr = ["jan", "feb", "mar", "apr", "may","jun", "jul", "aug", "sep", "oct", "nov", "dec"];

console.log(day, date, time);

time.innerHTML = `${dayarr[day]}, ${montharr[month]} ${date=="1" ? "1st" : date=="2" ? "2nd" : date=="3" ? "3rd" : `${date}th`}`;

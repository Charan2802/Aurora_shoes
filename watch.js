const hr_hand = document.getElementsByClassName("hour-hand");
const min_hand = document.getElementsByClassName("minnute-hand");
const sec_hand = document.getElementsByClassName("second-hand");
const val = document.querySelectorAll("#time .value");
const dt = document.getElementsByClassName("date");
const options = {
    weekday: 'short' , month : 'short' , day:'numeric'
};
let indicator = document.getElementsByClassName('indicator')

setInterval(() => {
    
    let date = new date();
    dt.firstElementchild.innertext= date.tolocaleDatestring('en-US',options);

    let h=date.gethours();
    let m= date.getminutes();
    let s= date.getseconds();
    {}
}, 1000);
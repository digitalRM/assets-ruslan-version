async function getContent(name) {
    let res = await fetch("https://raw.githubusercontent.com/DerekZZhu/Assets/main/wiki.json")
    return await res.json()[name]
}

var start = Date.now()
var lseconds = document.getElementById("seconds")
var lminutes = document.getElementById("minutes")
var lhours = document.getElementById("hours")
var ldays = document.getElementById("days")
var lyears = document.getElementById("years")
setInterval(function() {
    var delta = Date.now() - new Date("2021-07-08") 
    // output(Math.floor(delta / 1000))
    var seconds = Math.floor(delta / 1000),
    minutes = Math.floor(seconds / 60),
    hours   = Math.floor(minutes / 60),
    days    = Math.floor(hours / 24),
    weeks  = Math.floor(days / 7),
    years   = Math.floor(weeks / 52);

    seconds %= 60;
    minutes %= 60;
    hours %= 24;
    days %= 7;
    weeks %= 52

    console.log(seconds, minutes, hours, days, weeks, years)
    lseconds.innerHTML = `${seconds}`
    lminutes.innerHTML = `${minutes}`
    lhours.innerHTML = `${hours}`
    ldays.innerHTML = `${days}`
    lyears.innerHTML = `${years}`
}, 1000)


document.getElementById("onclick").addEventListener("onclick", (event) => {
    console.log("Clicked");
})

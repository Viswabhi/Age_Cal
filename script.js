const curDate = new Date();
var curDay = curDate.getDate();
var curMonth = curDate.getMonth() + 1; 
var curYear = curDate.getFullYear();
var calculate = document.getElementById("Calculate");

var BM, BY, BD;

document.getElementById("date-input").addEventListener('change', () => {
    var date_input = document.getElementById("date-input").value;

    BY = parseInt(date_input.substr(0, 4)); 
    BM = parseInt(date_input.substr(5, 2)); 
    BD = parseInt(date_input.substr(8, 2)); 
})

var days = document.getElementById("days");
var year = document.getElementById("years");
var months = document.getElementById("months");

calculate.addEventListener('click', function () {
    let resultYear;
    let resultMonth;
    let resultDay;

    if ((BY > curYear) || (BM > curMonth && BY == curYear) ||
        (BD > curDay && BM == curMonth && BY == curYear)) {
        days.innerText = "Not";
        months.innerText = "Yet";
        year.innerText = "Born!";
        return; 
    }
    resultYear = curYear - BY;

    if (curMonth < BM) {
        resultYear--;
        resultMonth = 12 + curMonth - BM;
    } else {
        resultMonth = curMonth - BM;
    }

    if (curDay < BD) {
        resultMonth--; 
        resultDay = 30 + curDay - BD;
    } else {
        resultDay = curDay - BD;
    }

    if (resultMonth < 0) {
        resultMonth = 12 + resultMonth; 
    }

    days.innerText = `${resultDay}`;
    months.innerText = `${resultMonth}`;
    year.innerText = `${resultYear}`;
});

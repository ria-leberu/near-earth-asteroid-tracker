const API_URL = "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=ae0cwPIDUkVuV1WnhrlmufZ0ZQh2apcw413h3Bpk";

const TEST_DATA = "test-data.json";

let sortDirection = false;

const neoData = getNEOData();

async function getNEOData(){
    const response = await fetch(API_URL);
    const neo_data = await response.json();

    //console.log(neo_data)
    return neo_data

}



/* $('th').on('click', function(){
    console.log('Column was clicked')
}) */


neoData
.then(data => {buildTable(data.near_earth_objects);});


function buildTable(data) {
    let table = document.getElementById('neo-table')

    for (let i = 0; i < data.length; i++){
        let row = `<tr>
            <td>${data[i].name}</td>
            <td>${findClosestDate(data[i].close_approach_data)}</td>

            <td>${data[i].estimated_diameter.meters.estimated_diameter_max.toFixed(0)} meters </td>


        </tr>`

       /*  for (let j=0; j<data[i].close_approach_data.length; j++){
            console.log(data[i].close_approach_data[j].close_approach_date)
        } */

        table.innerHTML += row
    }

    

}

//function to return soonest date after current, API returns date in format "1900-12-27"
 function findClosestDate(approach_date_list){
     let today = new Date()
     let i = 0;
    
    while (fDate(approach_date_list[i].close_approach_date) <  today){
        i++
    }
    //console.log(fDate(approach_date_list[i].close_approach_date).getFullYear() > today.getFullYear())
    //console.log(today.getFullYear())
    return approach_date_list[i].close_approach_date
} 

    
//convert to date format
function fDate(s) {
    let d = new Date();
    s = s.split('-');
    d.setFullYear(s[0]);
    d.setMonth(s[1]);
    d.setDate(s[2]);
    return d;
}

function sortColumn(columnName) {
    const dataType = typeof columnName;
    console.log(dataType)
    sortDirection = !sortDirection;

    switch(dataType) {
         
    }

}
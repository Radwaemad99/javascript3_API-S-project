// Sample data (replace with your API data)
const data = [
    { id: 1, name: "radwa emad eldin", age: 25, job: "cms engineer" },
    { id: 2, name: "abdelrhman emad eldin", age: 27, job: "doctor" },
    { id: 3, name: "mohamed emad eldin", age: 29, job: "teacher"},
    { id: 4, name: "hamza ahmed", age: 2, job: "children" },
    { id: 5, name: "manal abdelaziz", age: 55, job: "teacher" },
    { id: 6, name: "rana mohamed", age: 26, job: "accountant" },
    { id: 7, name: "salmaa nageeb", age: 24, job: "web developer" },
    { id: 8, name: "nada abobakr omar", age: 27, job: "testing engineer" },
    
];


function displayData(data) {
    let tbody = document.getElementById("data-table").tBodies[0];
    tbody.innerHTML = ""; 

    data.forEach(item => {
        let row = tbody.insertRow();
        let idCell = row.insertCell(0);
        let nameCell = row.insertCell(1);
        let ageCell = row.insertCell(2);
        let jobCell =row.insertCell(3);
       

        idCell.textContent = item.id;
        nameCell.textContent = item.name;
        ageCell.textContent = item.age;
        jobCell.textContent= item.job

      
    });
}


displayData(data);
function getDataById(id) {
    let filteredData = data.filter(item => item.id === id);
    if (filteredData.length > 0) {
        return filteredData[0];
    } else {
        return null; 
    }
}

// Example accessing by id
 dataById = getDataById(3);
console.log(dataById); 
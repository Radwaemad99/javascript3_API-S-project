// Sample data (replace with your API data)
const data = [
    { id: 1, name: "radwa emad eldin", age: 25, job: "cms engineer", salary: 10000 },
    { id: 2, name: "abdelrhman emad eldin", age: 27, job: "doctor", salary: 8000 },
    { id: 3, name: "mohamed emad eldin", age: 29, job: "teacher", salary: 3000},
    { id: 4, name: "hamza ahmed", age: 2, job: "children", salary: 0 },
    { id: 5, name: "manal abdelaziz", age: 55, job: "teacher", salary:9000 },
    { id: 6, name: "rana mohamed", age: 26, job: "accountant", salary: 7000 },
    { id: 7, name: "salmaa nageeb", age: 24, job: "web developer", salary: 12000 },
    { id: 8, name: "nada abobakr omar", age: 27, job: "testing engineer", salary:10000 },
    
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
        let salaryCell = row.insertCell(4);
       

        idCell.textContent = item.id;
        nameCell.textContent = item.name;
        ageCell.textContent = item.age;
        jobCell.textContent= item.job
        salaryCell.textContent= item.salary;

      
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

const form = document.getElementById("employeeForm");
const table = document.getElementById("employeeTable");

const totalEmployees = document.getElementById("totalEmployees");
const totalSalary = document.getElementById("totalSalary");
const highestSalary = document.getElementById("highestSalary");

let employees = [];
let editIndex = null;


/* ADD EMPLOYEE */

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;
    const department = document.getElementById("department").value;
    const salary = Number(document.getElementById("salary").value);

    const employee = {name, department, salary};

    if(editIndex === null){
        employees.push(employee);
    }else{
        employees[editIndex] = employee;
        editIndex = null;
    }

    form.reset();

    renderEmployees();
});


/* RENDER TABLE */

function renderEmployees(){

    table.innerHTML = "";

    employees.forEach((emp,index)=>{

        const row = `
        <tr>
            <td>${emp.name}</td>
            <td>${emp.department}</td>
            <td>${emp.salary}</td>

            <td>
                <button class="edit" data-index="${index}">Edit</button>
                <button class="delete" data-index="${index}">Delete</button>
            </td>
        </tr>
        `;

        table.innerHTML += row;
    });

    updateDashboard();
}


/* DELETE + EDIT (EVENT DELEGATION) */

table.addEventListener("click", function(e){

    const index = e.target.dataset.index;

    if(e.target.classList.contains("delete")){
        employees.splice(index,1);
        renderEmployees();
    }

    if(e.target.classList.contains("edit")){

        const emp = employees[index];

        document.getElementById("name").value = emp.name;
        document.getElementById("department").value = emp.department;
        document.getElementById("salary").value = emp.salary;

        editIndex = index;
    }

});


/* DASHBOARD STATS */

function updateDashboard(){

    totalEmployees.textContent = employees.length;

    const salaries = employees.map(e=>e.salary);

    const total = salaries.reduce((a,b)=>a+b,0);
    totalSalary.textContent = total;

    highestSalary.textContent =
        salaries.length ? Math.max(...salaries) : 0;
}
    
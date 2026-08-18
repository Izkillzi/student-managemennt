function addStudent() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let grade = document.getElementById("grade").value;

    if (name === "" || age === "" || grade === "") {
        alert("Please fill in all fields");
        return;
    }

    let student = document.createElement("tr");

    student.innerHTML =
        "<td>" + name + "</td>" +
        "<td>" + age + "</td>" +
        "<td>" + grade + "</td>" +
        "<td></td>";

    let EditButton = document.createElement("button");
    EditButton.innerHTML = "Edit";

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";

    EditButton.onclick = function () {

        let newName = prompt("Enter new name:", name);
        let newAge = prompt("Enter new age:", age);
        let newGrade = prompt("Enter new grade:", grade);

        if (newName !== null && newAge !== null && newGrade !== null) {
            name = newName;
            age = newAge;
            grade = newGrade;

            student.children[0].innerHTML = name;
            student.children[1].innerHTML = age;
            student.children[2].innerHTML = grade;
        }
    }

    deleteButton.onclick = function () {
        student.remove();
    }

    student.children[3].appendChild(EditButton);
    student.children[3].appendChild(deleteButton);

    document.getElementById("student").appendChild(student);

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("grade").value = "";
}
function searchStudent() {
    let search = document.getElementById("search").value.toLowerCase();

    let students = document.getElementById("student").children;

    for (let student of students) {
        let name = student.children[0].innerText.toLowerCase();

        if (name.includes(search)) {
            student.style.display = "";
        } else {
            student.style.display = "none";
        }
    }
}
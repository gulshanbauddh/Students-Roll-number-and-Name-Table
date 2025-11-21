let count = 1;
function insTable() {
  let rollNo = document.getElementById("rollNo").value;
  let name = document.getElementById("name").value;
  let genderList = document.getElementsByName("gender");
  let newTableDdata = document.getElementById("newTableDdata");
  let gender = "";
  for (i = 0; i < genderList.length; i++) {
    if (genderList[i].checked) {
      gender = genderList[i].value;
    }
  }
  if (rollNo === "" || name === "" || gender === "") {
    alert("Please fill all the fields.");
    return;
  }

  newTableDdata.innerHTML += `<tr><td>${count++}</td><td>${rollNo}</td><td>${name}</td><td>${gender}</td></tr>`;
  document.getElementById("rollNo").value = "";
  document.getElementById("name").value = "";
  for (let i = 0; i < genderList.length; i++) {
    genderList[i].checked = false;
  }
}

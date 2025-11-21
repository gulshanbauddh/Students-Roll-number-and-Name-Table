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
/* Resposnive design for smaller screens */
   @media (max-width: 480px) {
        h1 {
          font-size: 25px;
        }
        .container {
          padding: 15px;
        }
        th,
        td {
          padding: 8px;
          font-size: 14px;
        }
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          margin: auto 25vw;
          background-color: #fff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          margin: inherit;
          margin-top: 5vh;
        }
        table {
          width: 80vw;
          margin:0px;
        }
        form{
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
        }
      }

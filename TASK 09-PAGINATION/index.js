"use strict";
//... creating container div ...///
const body = document.body;
const container_div = document.createElement("div");
container_div.classList.add("container");
//... creating heaer div ...//
const Header_div = document.createElement("H1");
Header_div.classList.add("text-center");
Header_div.id = "title";
Header_div.innerHTML = "[--- TASK 09 DOM ---]";
//... creating paragraph div ...//
const para_div = document.createElement("p");
para_div.classList.add("text-center");
para_div.id = "description";
para_div.innerHTML = "[PAGINATION]";

//... creating  table div ...///
const tableDiv = document.createElement("div");
tableDiv.classList.add("table-responsive", "d-flex", "justify-content-center");

//... appending created elements  in html body ...//

container_div.append(Header_div, para_div, tableDiv);
body.append(container_div);

//... Creating table function and creating table elements..//
function addItems(dataArray, page) {
  let table = document.createElement("table");
  table.classList.add("table-bordered", "mt-5", "text-center");
  table.innerHTML = `<thead>
   <tr>
     <th>S.no</th>
     <th>Name</th>
     <th>Email</th>
   </tr>
 </thead>
`;
  let tableBody = document.createElement("TBODY");
  tableBody.id = "t-body";
  table.append(tableBody);

  let start = page * 10 - 10;
  let end = page * 10;
  for (let i = start; i < end; i++) {
    let currentData = dataArray[i];
    let currentRow = document.createElement("TR");
    let data1 = document.createElement("TD");
    let data2 = document.createElement("TD");
    let data3 = document.createElement("TD");
    data1.innerText = `${currentData.id}`;
    data2.innerText = `${currentData.name}`;
    data3.innerText = `${currentData.email}`;
    currentRow.append(data1, data2, data3);
    tableBody.append(currentRow);
    table.append(tableBody);
    tableDiv.append(table);
  }
}

// function for getting JSON DATA //

async function getjsonData() {
  let res = await fetch(
    "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"
  );
  let data = await res.json();

  /// showing first page as default;

  addItems(data, 1); ///calling function addITEMS() and passing  data and pagevalues
  let buttonBox = document.createElement("div");
  buttonBox.classList.add(
    "buttons",
    "d-flex",
    "justify-content-center",
    "mt-3"
  );
  buttonBox.id = "Buttons";

  //  function  To  create page buttons.... ///
  function createButtons(name) {
    let ButtonName = name;
    ButtonName = document.createElement("button");
    ButtonName.setAttribute("id", `${name}`);
    ButtonName.setAttribute("name", "pageButtons");
    ButtonName.innerText = `${name}`;
    return ButtonName;
  }
  /// looping and creating page button names ////
  const pages = ["First", "Previous"];
  for (let i = 1; i <= 10; i++) pages.push(i);
  pages.push("Next");
  pages.push("Last");
  for (let buttons of pages) {
    buttons = createButtons(buttons);
    buttonBox.append(buttons);
  }
  container_div.append(buttonBox);

  // adding page click functionality
  const btngroup = document.getElementsByName("pageButtons");
  let currentPage = 1;
  for (let buttons of btngroup) {
    buttons.addEventListener("click", () => {
      let temp = document.getElementById(currentPage.toString());

      let pageNumber;
      tableDiv.innerHTML = ``;
      switch (buttons.id) {
        case "First":
          pageNumber = 1;
          currentPage = 1;
          break;
        case "Last":
          pageNumber = 10;
          currentPage = 10;
          break;
        case "Previous":
          if (currentPage > 1) {
            pageNumber = currentPage - 1;
            currentPage = currentPage - 1;
          } else {
            pageNumber = currentPage;
          }
          break;
        case "Next":
          if (currentPage < 10) {
            pageNumber = currentPage + 1;
            currentPage = currentPage + 1;
          } else {
            pageNumber = currentPage;
          }
          break;
        default:
          currentPage = parseInt(buttons.id);
          pageNumber = currentPage;
      }
      let finish = document.getElementById(pageNumber);
      temp.classList.remove("active");
      finish.classList.add("active");
      addItems(data, pageNumber);
    });
  }
}

getjsonData();

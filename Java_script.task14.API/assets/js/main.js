import { BASE_URL } from "./data.js";
const Tbody = document.querySelector("tbody")



function getData(endpoint) {
  fetch(`${BASE_URL}/${endpoint}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        drawtable(data);

    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
    });
}

getData("customers");

function drawtable(arr){
    Tbody.innerHTML = "";
    arr.forEach((item)=>{
        Tbody.innerHTML += `
         <tr>
            <td>${item.id}</td>
            <td>${item.companyName}</td>
            <td>${item.contactTitle}</td>
            <td>${item.address?.phone}</td>
            <td>${item.address?.street}</td>
            <td>${item.address?.city}, ${item.address?.country}</td>
             <td class="d-flex gap-2">
                <button class="delete btn btn-outline-danger" data-id=${item.id}>delete</button>
                <button class="edit btn btn-outline-success">edit</button>
                <a class="btn btn-outline-primary d-flex align-items-center" href="details.html?id=${item.id}">details</a>
            </td>
        </tr>
    
    `;
    })
    const deletebtn = document.querySelectorAll(".delete");

    deletebtn.forEach((btn) => {
      btn.addEventListener("click", function () {
        const Id = this.getAttribute("data-id");
        deleteData("suppliers", Id, this);
      });
    });

}




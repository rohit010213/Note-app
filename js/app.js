const titles = document.getElementById("title");
const Notes = document.getElementById("notes");
const btn = document.getElementById("btnsave");
let obj;
let arr = [];


btn.addEventListener(
    "click",
    function (event) {

        obj = {
            title: titles.value,
            note: Notes.value
        }
        arr.push(obj);

        localStorage.setItem("Data", JSON.stringify(arr))

        titles.value = "";
        Notes.value = "";
        Shownotes();

    }
)


const Shownotes = () => {
    let html = "";
    const item = localStorage.getItem("Data");
    if (item != null) {
        arr = JSON.parse(item)

    }
    const show = document.getElementById("box3");


    arr.forEach(
        (Svalue, index) => {
            html += ` <div   class="int">
           <h3>${index + 1}) ${Svalue.title}</h3>
           <h2>${Svalue.note}</h2>
           <button class="btnremove" id=${index} onclick="deletenote(${index})" >Remove</button>
        </div>`
        }
    );

    show.innerHTML = html;

}

Shownotes();

function deletenote(index) {
    arr.splice(index, 1)
    localStorage.setItem("Data", JSON.stringify(arr))
    Shownotes();
}   
const notesContainer = document.querySelector(".notes-container");
const createbtn = document.querySelector(".btn");
let notes = document.querySelector(".inputbox");
retrive();
createbtn.addEventListener('click',function max()
{
    let inputbox=document.createElement("p");
    let img = document.createElement("img");
    inputbox.className="inputbox";
    inputbox.setAttribute("contenteditable","true");
    save();
    img.src="delete.png";
    notesContainer.appendChild(inputbox).appendChild(img);
    save();

});

notesContainer.addEventListener('click',function(e){
    if(e.target.tagName === "IMG")
        {
            
            e.target.parentElement.remove();
            save();
        }
        else if(e.target.tagName==="P")
            {
                notes = document.querySelectorAll(".inputbox");
                notes.forEach(nt=>{
                    nt.onkeyup=function()
                    {
                        save();
                    }
                });
            }
});

function save()
{
    let data= localStorage.setItem("notes",notesContainer.innerHTML);
}

function retrive()
{
    notesContainer.innerHTML=localStorage.getItem("notes");
}

document.addEventListener("keydown", event => {
    if(event.key ==="Enter")
        {
            document.execCommand("insertlineBreak");
            event.preventDefault();
        }
});
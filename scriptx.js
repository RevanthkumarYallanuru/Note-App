const notesContainer = document.querySelector(".notes-container");
const createbtn = document.querySelector(".btn");
let inputbox = document.querySelectorAll(".inputbox");
retrive();
createbtn.addEventListener('click',()=>{
   let inputbox=document.createElement("p");
        inputbox.className="inputbox";
    let img=document.createElement("img");
    img.src="delete.png";
    inputbox.setAttribute("contenteditable","true");
    notesContainer.appendChild(inputbox).append(img);
    save();


});

notesContainer.addEventListener('click',(e)=>
{
    if(e.target.tagName==="IMG")
        {
            e.target.parentElement.remove();
            save();
        }
        else if(e.target.tagName=="P")
            {
                note=document.querySelectorAll(".inputbox");
                note.forEach(nt=>{
                    nt.onkeyup=function()
                    {
                        save();
                    }
                })
            }
});

function save()
{
  localStorage.setItem("num",notesContainer.innerHTML);
  localStorage.setItem("np",inputbox.innerHTML);
}

function retrive()
{
    notesContainer.innerHTML=localStorage.getItem("num");
    inputbox.innerHTML=localStorage.getItem("np");
}
document.addEventListener('keydown',(ef)=>
{
    if(ef.key === "Enter")
        {
            ef.preventDefault();
        }
});
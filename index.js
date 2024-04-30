var button_project = document.getElementById("button_project");
var button_resume = document.getElementById("button_resume");
var project = document.getElementById("project");
var resume = document.getElementById("resume");
button_project.onclick = function hide(){
    project.classList.remove("display_grid")
    resume.classList.remove("display_block")
    project.classList.add("display_grid");
    resume.classList.add("display_none");
    console.log("aa");
}
button_resume.onclick = function hide(){
    project.classList.remove("display_grid")
    resume.classList.remove("display_block")
    project.classList.add("display_none");
    resume.classList.add("display_block");
    console.log("aa");
}

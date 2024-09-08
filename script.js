var toggleSkillsButton = document.getElementById("toggle-skills");
var skillsSection = document.getElementById("skills");
toggleSkillsButton.addEventListener("click", function () {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
        toggleSkillsButton.style.rotate = "-90deg";
        // toggleSkillsButton.innerText = "Close Skill Section"
    }
    else {
        skillsSection.style.display = "none";
        toggleSkillsButton.style.rotate = "90deg";
    }
});

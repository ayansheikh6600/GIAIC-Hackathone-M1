const toggleSkillsButton = document.getElementById("toggle-skills") as HTMLButtonElement;
const skillsSection = document.getElementById("skills") as HTMLElement;

toggleSkillsButton.addEventListener("click", () => {
  if (skillsSection.style.display === "none") {
    skillsSection.style.display = "block";
    toggleSkillsButton.style.rotate = "-90deg"

    // toggleSkillsButton.innerText = "Close Skill Section"
  } else {
    skillsSection.style.display = "none";
    toggleSkillsButton.style.rotate = "90deg"
  }
});

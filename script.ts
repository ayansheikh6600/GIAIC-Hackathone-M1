const toggleSkillsButton = document.getElementById("toggle-skills") as HTMLButtonElement;
const skillsSection = document.getElementById("skills") as HTMLElement;

toggleSkillsButton.addEventListener("click", () => {
  if (skillsSection.style.display === "none") {
    skillsSection.style.display = "block";
    toggleSkillsButton.innerText = "Close Skill Section"
  } else {
    skillsSection.style.display = "none";
    toggleSkillsButton.innerText = "Open Skill Section"
  }
});

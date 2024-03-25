function setupCodeSample(id) {
  const elt = document.getElementById(id);
  const inputs = elt.querySelectorAll("input[type=radio]");
  const selected = elt.querySelector("input[type=radio]:checked");
  const samples = elt.querySelectorAll(".code[data-for-sample]");

  function showInput(input) {
    for (const s of samples) {
      if (s.attributes["data-for-sample"].value === input.value) {
        s.style.display = "block";
      } else {
        s.style.display = "none";
      }
    }
  }

  showInput(selected);
  for (const input of inputs) {
    input.addEventListener("change", () => showInput(input));
  }
}

window.setupCodeSample = setupCodeSample;
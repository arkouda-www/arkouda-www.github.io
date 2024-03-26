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

function loadGraph(id) {
  const scalingGraph = document.getElementById(id);
  new Chart(scalingGraph, {
      type: 'line',
      data: {
          labels: [1, 2, 4, 8, 16, 32, 64, 128, 240],
          datasets: [{
              label: 'Average Rate (GB/s) When Sorting One Million Elements',
              data: [1.5959, 1.8311, 2.8216, 5.0059, 9.4029, 18.9857, 36.2431, 67.0669, 120.0836],
              borderWidth: 5
          }]
      },
      options: {
          scales: {
              x: {
                  type: 'linear',
                  title: {
                      display: true,
                      text: 'Number of Nodes'
                  }
              },
              y: {
                  type: 'linear',
                  beginAtZero: true,
                  title: {
                      display: true,
                      text: 'Rate (GB/s)'
                  }
              }
          }
      }
  });
}

window.setupCodeSample = setupCodeSample;
window.loadGraph = loadGraph;

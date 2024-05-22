// script.js
let partitionId = 1;

function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createControls() {
  const controls = document.createElement("div");
  controls.className = "controls";

  const vButton = document.createElement("button");
  vButton.className = "button";
  vButton.innerText = "V";
  vButton.onclick = function () {
    splitPartition(vButton, "V");
  };

  const hButton = document.createElement("button");
  hButton.className = "button";
  hButton.innerText = "H";
  hButton.onclick = function () {
    splitPartition(hButton, "H");
  };

  const removeButton = document.createElement("button");
  removeButton.className = "button";
  removeButton.innerText = "-";
  removeButton.onclick = function () {
    removePartition(removeButton);
  };

  controls.appendChild(vButton);
  controls.appendChild(hButton);
  controls.appendChild(removeButton);

  return controls;
}

function splitPartition(button, direction) {
  const partition = button.closest(".partition");
  partitionId++;

  const newPartition = document.createElement("div");
  newPartition.className = "partition";
  newPartition.style.backgroundColor = generateRandomColor();

  const controls = createControls();
  newPartition.appendChild(controls);

  if (direction === "V") {
    partition.style.display = "flex";
    partition.style.flexDirection = "row";
    partition.appendChild(newPartition);
    newPartition.style.flex = "1";
    partition.firstChild.style.flex = "1";
  } else if (direction === "H") {
    partition.style.display = "flex";
    partition.style.flexDirection = "column";
    partition.appendChild(newPartition);
    newPartition.style.flex = "1";
    partition.firstChild.style.flex = "1";
  }

  partition.firstChild.remove();
}

function removePartition(button) {
  const partition = button.closest(".partition");
  partition.remove();
}

function makeResizable(partition) {
  $(partition).resizable({
    handles: "e, w, n, s",
    stop: function (event, ui) {
      const parent = ui.element.parent();
      const parentWidth = parent.width();
      const parentHeight = parent.height();

      // Adjust the flex-basis according to the new size
      ui.element.css({
        flexBasis: `${(ui.size.width / parentWidth) * 100}%`,
        height: `${(ui.size.height / parentHeight) * 100}%`,
      });
    },
  });
}

function splitPartition(button, direction) {
  const partition = button.closest(".partition");
  partitionId++;

  const newPartition = document.createElement("div");
  newPartition.className = "partition";
  newPartition.style.backgroundColor = generateRandomColor();

  const controls = createControls();
  newPartition.appendChild(controls);

  if (direction === "V") {
    partition.style.display = "flex";
    partition.style.flexDirection = "row";
    partition.appendChild(newPartition);
    newPartition.style.flex = "1";
    partition.firstChild.style.flex = "1";
  } else if (direction === "H") {
    partition.style.display = "flex";
    partition.style.flexDirection = "column";
    partition.appendChild(newPartition);
    newPartition.style.flex = "1";
    partition.firstChild.style.flex = "1";
  }

  partition.firstChild.remove();

  makeResizable(newPartition);
  makeResizable(partition.children[0]);
}

function removePartition(button) {
  const partition = button.closest(".partition");
  partition.remove();
}

document.addEventListener("DOMContentLoaded", () => {
  makeResizable(document.getElementById("container"));
});

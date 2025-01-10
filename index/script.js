document.addEventListener("DOMContentLoaded", () => {
  const inputBox = document.getElementById("input-box");
  const numberDisplay = document.getElementById("number-display");
  const okButton = document.getElementById("ok-button");
  const optionsContainer = document.querySelector(".options-container");

  inputBox.addEventListener("input", () => {
    numberDisplay.textContent = inputBox.value || "0";
  });

  okButton.addEventListener("click", () => {
    const newNumber = inputBox.value.trim();

    if (newNumber === "" || isNaN(newNumber)) {
      alert("Vui lòng nhập số hợp lệ!");
      return;
    }

    // Tạo nút option mới
    const newOptionButton = document.createElement("button");
    newOptionButton.classList.add("option-button");
    newOptionButton.textContent = newNumber;

    newOptionButton.addEventListener("click", () => {
      inputBox.value = newOptionButton.textContent;
      numberDisplay.textContent = newOptionButton.textContent;
    });

    const lastRow = optionsContainer.lastElementChild;
    if (!lastRow || lastRow.children.length >= 4) {
      const newRow = document.createElement("div");
      newRow.classList.add("options");
      optionsContainer.appendChild(newRow);
      newRow.appendChild(newOptionButton);
    } else {
      lastRow.appendChild(newOptionButton);
    }

    inputBox.value = "";
    numberDisplay.textContent = "0";
  });
});

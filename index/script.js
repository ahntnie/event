document.addEventListener("DOMContentLoaded", () => {
  const inputBox = document.getElementById("input-box");
  const numberDisplay = document.getElementById("number-display");
  const okButton = document.getElementById("ok-button");
  const optionsContainer = document.querySelector(".options-container");

  inputBox.addEventListener("input", () => {
    numberDisplay.textContent = inputBox.value || "-";
  });

  inputBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      handleOkClick();
    }
  });

  okButton.addEventListener("click", () => {
    handleOkClick();
  });

  function handleOkClick() {
    const newNumber = inputBox.value.trim();

    if (!/^\d{2}$/.test(newNumber) || parseInt(newNumber, 10) <= 9) {
      alert("Vui lòng nhập một số hợp lệ có đúng 2 chữ số (10-99)!");
      return;
    }

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
  }
});

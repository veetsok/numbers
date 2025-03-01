document.querySelector("button").addEventListener("click", () => {
  const input = document.querySelector("input");
  const phoneNumber = input.value;

  const formattedNumber = phoneNumber
    .split("")
    .reduce((acc, char) => (/\d/.test(char) ? acc + char : acc), "");

  input.value = formattedNumber;

  navigator.clipboard
    .writeText(formattedNumber)
    .then(() => {
      console.log("Номер скопирован:", formattedNumber);
    })
    .catch((err) => console.error("Ошибка копирования:", err));
});

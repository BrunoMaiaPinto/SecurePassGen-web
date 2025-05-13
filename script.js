const option_1 = document.querySelector("#option_1");
const option_2 = document.querySelector("#option_2");
const option_3 = document.querySelector("#option_3");
const option_4 = document.querySelector("#option_4");

const range_1 = document.querySelector("#range_1");
const reset_options = document.querySelector("#reset_options");
const copyBtn = document.querySelector("#copy-btn");

const hashs = document.querySelector("#hashs");

option_1.addEventListener("change", generateHashs);
option_2.addEventListener("change", generateHashs);
option_3.addEventListener("change", generateHashs);
option_4.addEventListener("change", generateHashs);

range_1.addEventListener("input", () => {
  document.querySelector("#range_1_value").innerHTML = range_1.value;
  generateHashs();
});

reset_options.addEventListener("click", () => {
  option_1.checked = true;
  option_2.checked = false;
  option_3.checked = true;
  option_4.checked = false;
  range_1.value = 16;
  document.querySelector("#range_1_value").innerHTML = range_1.value;
  generateHashs();
});

function generateHashs() {
  const characters = [];
  if (option_1.checked) characters.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  if (option_2.checked) characters.push("abcdefghijklmnopqrstuvxz");
  if (option_3.checked) characters.push("0123456789");
  if (option_4.checked) characters.push("!@#$%^&*()_+[]{}|;':,.<>?");

  const hashLength = range_1.value;

  const charactersString = characters.join("");

  let password = "";
  for (i = 0; i < hashLength; i++) {
    password +=
      charactersString[Math.floor(Math.random() * charactersString.length)];
  }
  hashs.value = password;
}

generateHashs();

function copyHash() {
  hashs.select();
  navigator.clipboard.writeText(hashs.value);
}

copyBtn.addEventListener("click", () => copyHash());

document.querySelector(".year").innerHTML = `${new Date().getFullYear()}`;

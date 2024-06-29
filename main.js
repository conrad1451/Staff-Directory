

const getDataFromBackend = async () => {
  const rest = await fetch(PORT + "/users");
  const data = await rest.json();

  return data;
};

const container = document.getElementById("container");
const openFormButton = document.getElementById("newUserButton");
const closeFormButton = document.getElementById("closeFormButton");
const addUserFormContainer = document.getElementById("addUserFormContainer");

openFormButton.addEventListener("click", () => {
  addUserFormContainer.style.display = "flex";
});

closeFormButton.addEventListener("click", () => {
  addUserFormContainer.style.display = "none";
});

// CHQ: Displays the data from the database in the front-end portion
//      of the app
const addData = async () => {
  const data = await getDataFromBackend();

  data.forEach((value) => {
    const div = document.createElement("div");
    div.classList.add("userContainer");
    div.innerHTML = `
        <h3>${value.name}</h3>
        <p>${value.role}</p>
    `;

    // console.error(value.name);
    // alert(value.name);

    container.append(div);
  });
};

addData();

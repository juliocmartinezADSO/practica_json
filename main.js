const json = "./objetos.json";
const datos = document.querySelector("#datos");

fetch(json)
  .then((response) => response.json())
  .then((data) => {
/* Adding two new objects to the `data` array with the properties `marca` and `modelo` set to "Ford"
and "Fiesta" respectively. */
    data.push({ marca: "Ford", modelo: "Fiesta" });
    data.push({ marca: "Suzuki", modelo: "2019X" });

    data.map((user) => {
      let li = document.createElement("li");
      li.innerHTML = `${user.marca} - ${user.modelo}`;
      datos.appendChild(li);
    });
  });

const json = "./objetos.json";
const datos = document.querySelector("#datos");

fetch(json)
  .then((response) => response.json())
  .then((data) => {

    // Agregamos datos al array
    data.push({ marca: "Ford", modelo: "Fiesta" });
    data.push({ marca: "Suzuki", modelo: "2019X" });

    // Recorremos el array para mostrar los datos en el DOM(pantalla)
    data.map((user) => {
      let li = document.createElement("li");
      li.innerHTML = `${user.marca} - ${user.modelo}`;
      datos.appendChild(li);
    });
  });

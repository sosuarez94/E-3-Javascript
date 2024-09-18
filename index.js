const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const pizzaResult = document.getElementById("pizzaResult");
  const errorMessage = document.getElementById("error-message");

  // Función para mostrar la pizza encontrada
  const verPizza = (pizza) => {
    pizzaResult.innerHTML = `
      <div class="card">
        <div class="imgBx">
          <img src="${pizza.imagen}" alt="${pizza.nombre}" />
        </div>
        <div class="contentBx">
          <h2>${pizza.nombre}</h2>
          <h3>$${pizza.precio.toLocaleString()}</h3>
        </div>
      </div>
    `;
    // Limpiar mensaje error
    errorMessage.innerHTML = ""; 
  };

  // Función mostrar mensajes
  const mostrarError = (message) => {
    pizzaResult.innerHTML = ""; // Limpiar contenido de pizzas
    errorMessage.innerHTML = `<p class="error">${message}</p>`;
  };

  // Guardar pizza localStorage
  const lastPizza = localStorage.getItem("lastPizza");
  if (lastPizza) {
    // Mostrar la última pizza guardada
    verPizza(JSON.parse(lastPizza)); 
  }

  
  document.getElementById("buscarPizza").addEventListener("click", () => {
    const pizzaId = parseInt(document.getElementById("pizzaId").value);

    // Validar si el input es un número
    if (isNaN(pizzaId) || pizzaId <= 0) {
      mostrarError("Debe ingresar un número válido mayor a 0.");
      return;
    }

    // Buscar la pizza por el id
    const pizza = pizzas.find((p) => p.id === pizzaId);

    if (pizza) {
      // Mostrar pizza encontrada
      verPizza(pizza);
      
      // Guardar la pizza en Storage
      localStorage.setItem("lastPizza", JSON.stringify(pizza));
    } else {
      // Mostrar mensaje error
      mostrarError("No se encontró ninguna pizza con el ID ingresado.");
    }
  });
});

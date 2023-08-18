
const perritosArr = [
    {
      name: "Firulais",
      age: 5,
      color: "cafe",
    },
    {
      name: "Atlas",
      age: 5,
      color: "cafe",
    },
    {
      name: "Pedro",
      age: 5,
      color: "cafe",
    },
  ];
  const gatitosArr = [
    {
      name: "Michi",
      age: 3, // 0
      color: "blanco",
    },
    {
      name: "Naranja",
      age: 2, // 1
      color: "naranja",
    },
    {
      name: "Tom",
      age: 2, // 2
      color: "gris",
    },
  ];


let trueOFalse = true;

class Animal {
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
}
  
function initProgram() {
    while (trueOFalse) {
        let selectSection = parseInt (
            prompt(
                "¿Qué quieres hacer? \n 1. Añadir un gato \n 2. Añadir un perro \n 3. Ver gatos \n 4. Ver perros \n 5. Adoptar al ultimo perro \n 6. Adoptar al primer gato \n 7. Adoptar al primer perro \n 8. Adoptar al primer gato \n 9. buscar un gato \n 10. Ver nombres con - \n 11. Buscar un perro \n 12. Nombres al reves \n 13. Ver gatos y perros \n 14. Adoptar perro especifico \n 15. Adoptar perro especifico slice \n 16. Salir"
            )
        );


        switch (selectSection) {
            case 1:
              anadirGato();
              break;
            case 2:
              anadirPerro();
              break;
            case 3:
              verGatos();
              break;
            case 4:
              verPerritos();
              break;
            case 5:
              adoptarUltimoPerro();
              break;
            case 6:
              adoptarPrimerGato();
              break;
            case 7:
              break;
            case 8:
                adoptarPrimerGato();
              break;
            case 9:
              buscarUnGato();
              break;
            case 10:
              verNombresConGuion();
              break;
            case 11:
              break;
            case 12:
              verNombresAlReves();
              break;
            case 13:
              verGatosYPerros();
              break;
            case 14:
              adoptarPerroEspecifico();
              break;
            case 15:
              adoptarPerroEspecificoSlice();
              break;
            case 16:
              trueOFalse = false;
              break;
          }
    }
}

function anadirGato() {
    while (trueOFalse) {
        const name = prompt("Ingresa el nombre del gato");
        const age = parseInt(prompt("Ingresa la edad del gato"));
        const color = prompt("Ingresa el color del gato");

        if (name =="" || age=="" || color==""){
            alert("Ingresa todos los datos");
        } else{
            const gato = new Animal(name, age, color);
            gatitosArr.push(gato);
            initProgram();
        }
    }
}


function anadirPerro(){
    while (trueFalse) {
        const name = prompt("Ingresa el nombre del perro");
        const age = parseInt(prompt("Ingresa la edad del perro"));
        const color = prompt("Ingresa el color del perro");
        if (name =="" || age=="" || color==""){
            alert("Ingresa todos los datos");
        } else{
            const perro = new Animal(name, age, color);
            perritosArr.push(perro);
            initProgram();
        }
    }
}

function verGatos() {
    for (elemento of gatitosArr){
        alert(elemento.name);
    }
}

function verPerritos() {
    let perritos="";
    perritosArr.forEach((elemento) => {
        perritos += elemento.name + "\n";
    });
    alert(perritos);
}

function adoptarUltimoPerro() {
    const ultimoPerro = perritosArr.length-1;
    if (perritosArr.length == 0) {
        alert("No hay perritos");
        initProgram();
    } else {
        alert("Adoptaste a " + perritosArr[ultimoPerro].name);
        perritosArr.pop();
        initProgram();
    }
    
}

function adoptarPrimerGato() {
    if (gatitosArr.length==0) {
        alert("No hay gatitos");
        initProgram();
    } else {
        alert("Adoptaste a " + gatitosArr[0].name);
        gatitosArr.shift();
        initProgram();
    }
}

function buscarUnGato() {
    const nombreGato = prompt("Introduce el nombre del gatito que quieres buscar");
    const gatoEncontrado = gatitosArr.map((gato)=>gato.name).indexOf(nombreGato);
    if (gatoEncontrado == -1) {
        alert("No se encontró el gato");
    } else {
        alert(
            `Nombre: ${gatitosArr[gatoEncontrado].name} \n Edad: ${gatitosArr[gatoEncontrado].age} \n Color: ${gatitosArr[gatoEncontrado].color}`
        )
    }
}


function verNombresConGuion() {
    const nombreGatos = gatitosArr.map((gato) => gato.name).join(" - ");
    alert(nombreGatos);
    initProgram();
}

function verNombresAlReves() {
    const nombresPerro = perritosArr.map((perro) => perro.name).reverse().join(" - ");
    alert(nombresPerro);
    initProgram();
}

function verGatosYPerros() {
    const gatosYPerros = perritosArr.concat(gatitosArr);
    let nombres = "";
    for (elemento of gatosYPerros) {
        nombres += elemento.name + "\n";
    }
    alert(nombres);
    initProgram();
}

function adoptarPerroEspecifico() {
    const nombrePerro = prompt("Introduce el nombre del perrito a adoptar");
    const perroEncontrado = perritosArr.map((perro) => perro.name).indexOf(nombrePerro);
    
    if (perroEncontrado == -1) {
        alert("No se encontró el perro");
    } else {
        alert(`Adoptaste a ${perritosArr[perroEncontrado].name}`);
        perritosArr.splice(perroEncontrado,1);
        initProgram();
    }
}



initProgram();
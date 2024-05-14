// Seleccionar los elementos canvas y obtener su contexto
const canvasOOP = document.getElementById("canvasOOP");
const ctx = canvasOOP.getContext("2d");

const canvasOOP2 = document.getElementById("canvasOOP2");
const ctx2 = canvasOOP2.getContext("2d");

const canvasOOP3 = document.getElementById("canvasOOP3");
const ctx3 = canvasOOP3.getContext("2d");

// Se ajusta el tamaño de los canvas
canvasOOP.width = canvasOOP2.width = canvasOOP3.width= 300;
canvasOOP.height = canvasOOP2.height = canvasOOP3.height= 200;

//Color de fondo
canvasOOP.style.background = "#95C2FA";
canvasOOP2.style.background = "#CBABFC";
canvasOOP3.style.background = "#80FE84";

// Se define una clase para los círculos
class Circle {
    constructor(x, y, radius, text, color, background) {
        this.posX = x;
        this.posY = y;
        this.radius = radius;
        this.text = text;
        this.color = color;
        this.background = background;
    }

    draw(context) {
        context.beginPath();
        context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
        context.fillStyle = this.background;
        context.fill();

        context.strokeStyle = this.color;
        context.lineWidth = 3;
        context.stroke();

        context.textAlign = "center";
        context.textBaseline = "middle";
        context.font = "27px Times New Roman";
        context.fillStyle = this.color;
        context.fillText(this.text, this.posX, this.posY);
        context.closePath();
    }
}

// Crear instancias de círculos y dibujarlos
const miCirculo = new Circle(canvasOOP.width / 2, canvasOOP.height / 2, 50, 'Tec', 'navy', 'white');
miCirculo.draw(ctx);

//Dimensiones aleatorias
const randomX = Math.random() * canvasOOP2.width;
const randomY = Math.random() * canvasOOP2.height;
const randomRadius = Math.floor(Math.random() * 50 + 30);
const miCirculo2 = new Circle(randomX, randomY, randomRadius, 'Tec', '#6A40AB', 'white');
miCirculo2.draw(ctx2);


let arrayCircle=[];
//Multiobjetos
for (let i = 0; i < 10; i++) {
    let randomX = Math.random() * canvasOOP3.width;
    let randomY = Math.random() * canvasOOP3.height;
    let randomRadius = Math.floor(Math.random() * 10 + 30);

    let miCirculo3 = new Circle(randomX, randomY, randomRadius, i + 1, '#42D547','white');  
    arrayCircle.push(miCirculo3);
    arrayCircle[i].draw(ctx3);
}

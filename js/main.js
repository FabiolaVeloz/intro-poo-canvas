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


let arrayCircle = [];

for (let i = 0; i < 10; i++) {
    //Radio aleatorio para el tamaño del círculo
    let randomRadius = Math.floor(Math.random() * 10 + 30);
    // Margen entre el borde del canvas y los círculos
    let margin = 10; 
    //Garantiza que al menos el radio completo del círculo (randomRadius*2) esté dentro del canvas en X, y dejando el margen para que no se encime en el borde
    let maxX = canvasOOP3.width - randomRadius * 2 - margin * 1; 
    //Garantiza que al menos el radio completo del círculo (randomRadius*2) esté dentro del canvas en Y, y dejando el margen para que no se encime en el borde
    let maxY = canvasOOP3.height - randomRadius * 2 - margin * 1;
    //Multiplica el valor aleatorio (0 a 1) por el máximo de X, asegurando un rango de coordenadas, 
    //sumandole el radio para asegurar que no se salga el canvas y agregando el margen al borde
    let randomX = Math.random() * maxX + randomRadius + margin; 
    //Multiplica el valor aleatorio (0 a 1)  por el máximo de Y, asegurando un rango de coordenadas, 
    //sumandole el radio para asegurar que no se salga el canvas y agregando el margen al borde
    let randomY = Math.random() * maxY + randomRadius + margin;
    //Se especifican los atributos del círculo 
    let miCirculo3 = new Circle(randomX, randomY, randomRadius, i + 1, '#42D547', 'white');  
    arrayCircle.push(miCirculo3);
    //Se dibujan los círculos
    arrayCircle[i].draw(ctx3);
}

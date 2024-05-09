const canvasOOP = document.getElementById("canvasOOP");
const ctx = canvasOOP.getContext("2d");

//Se ajusta el tamaño de la ventana. 
const window_height = window.innerHeight;

const window_width = window.innerWidth;

//Se ajusta el tamaño del canvas 
canvasOOP.height = "200";
canvasOOP.width = "300";

//Color de fondo
canvasOOP.style.background = "#95C2FA";

//Clase
class Circle {
    //Constructor que carga los valores predeterminados del objeto
    constructor(x, y, radius, color, text) {
        //Posición del círculo
        this.posX = x;
        this.posY = y;
        //Tamaño
        this.radius = radius;
        //Color
        this.color = color;
        //Texto
        this.text = text;
    }

    //Método para redenrizar el objeto
    draw(context) {
        //Se inicia el objeto
        context.beginPath();
        
        context.strokeStyle = this.color;
        //Alineación horizontal del texto
        context.textAlign = "center";
        //Alineación vertical del texto
        context.textBaseline = "middle";

        context.font = "27px Times New Roman";
        //Renderiza el texto en el centro del objeto
        context.fillText(this.text, this.posX, this.posY);

        //Ancho de la línea
        context.lineWidth = 3;
        
        context.arc(this.posX, this.posY, this.radius, 0, Math.PI*2, false);

        context.stroke();

        context.closePath();

    }

}


let miCirculo = new Circle(canvasOOP.width/2, canvasOOP.height/2, 50, 'white', 'Tec');

miCirculo.draw(ctx);



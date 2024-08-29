class SlotMachine {
    constructor() {
      this.coinCount = 0;
    }
  
    play() {
      this.coinCount++;
  
      const resultado1 = Math.random() < 0.5;
      const resultado2 = Math.random() < 0.5;
      const resultado3 = Math.random() < 0.5;
  
      console.log(`Resultados: ${resultado1}, ${resultado2}, ${resultado3}`);
  
      if (resultado1 && resultado2 && resultado3) {
        console.log(`¡Felicidades, has ganado ${this.coinCount} monedas!`);
        this.coinCount = 0;
      } else {
        console.log("Buena suerte la próxima vez");
        console.log(`Tienes ${this.coinCount} monedas acumuladas`)
      }
    }
}
  
const machine = new SlotMachine();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
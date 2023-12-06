/**
 * A revovler las cartas, enpezando de derecha a izquierda, index.random ,.
 * No editar esta funcion
 */
export function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
        // cambiando los elementos al index
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
  }
  
  export default shuffle;
  
const container = document.querySelector('#cont');
const resp = document.querySelector('#arrayOriginal');
const suma = document.querySelector('#sumaArray');
const mod = document.querySelector('#parImpar');
const btn = document.createElement('button');


btn.classList.add('btn-ingresar');
container.appendChild(btn);
btn.textContent = 'ingresar';



btn.addEventListener("click", catchNum)

function catchNum () {
   let num;
   let arrayNum = [];

   for (let i = 0; i < 5; i++) {
      num = prompt('Ingrese el numero ' + (i + 1) + ' para el array');
      arrayNum.push(Number(num))
   }

   resp.textContent = 'Array Ingresado: ';
   resp.append(arrayNum);
   
   suma.textContent = 'Suma de los numeros ingresados es: ';
   totalSuma = arrayNum.reduce((acum, element)  => acum  + element, 0);
   // console.log(totalSuma);
   suma.append(totalSuma);

   if (totalSuma%2 === 0) {
      mod.textContent = 'EL resultado es par';
   } else {
      mod.textContent = 'El resultado es Impar';
   }




}
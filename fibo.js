// function retournant le nombre spécifique d'une suite de fibonacci
// la suite de fibonacci étant défini par les règles suivantes :
// F(0) = 0
// F(1) = 1
// F(n) = F(n-1) + F(n-2) pour n >= 2
function fibo(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(8));

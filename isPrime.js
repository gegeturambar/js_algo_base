// fonction permettant de savoir si le nombre entier passé en paramètre est un nombre premier ou non
function isPrime(toCheck) {
  for (i = 2; i < toCheck; i++) {
    if (toCheck % i == 0) return false;
  }
  return true;
}

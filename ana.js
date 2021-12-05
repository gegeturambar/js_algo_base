// réaliser une fonction permettant de savoir si les 2 chaînes de charactères entrées en paramètres sont
// un anagramme ( si donc les mêmes lettres les composent )
function isAna(str1, str2) {
  if (str1.length != str2.length) return false;

  let myAr = [];
  for (i = 0; i < str1.length; i++) {
    myAr[str1[i]] = myAr[str1[i]] ? myAr[str1[i]] + 1 : 1;
  }

  for (i = 0; i < str2.length; i++) {
    if (!myAr[str2[i]]) return false;
    myAr[str2[i]] = myAr[str2[i]] - 1;
    if (myAr[str2[i]] === 0) delete myAr[str2[i]];
  }
  return myAr.length == 0;
}

console.log(isAna("poule", "pleuoo"));

function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  
  for (i = 0; i < musicians.length; i++){
    newArray.push(musicians[i] + " plays " + instruments[i]);
  }
  
  return newArray;
}
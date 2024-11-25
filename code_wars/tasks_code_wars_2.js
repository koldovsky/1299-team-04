//Convert a string to an array
//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

function stringToArray(string){
  return string.split(" ";)
}

//DNA to RNA Conversion
//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}

//Find Maximum and Minimum Values of a List
//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

var min = function(list){
    list.sort((a, b) => a - b);
    return list[0];
}

var max = function(list){
    list.sort((a, b) => b - a);
    return list[0];
}

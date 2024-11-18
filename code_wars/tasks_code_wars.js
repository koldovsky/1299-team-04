function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

function makeNegative(num) {
  return -Math.abs(num);
}

function move(position, roll) {
  return roll * 2 + position;
}

function greet(name, owner) {
  return name === owner ? 'Hello boss' : 'Hello guest';
}

function litres(time) {
  return Math.floor(time / 2);
}

function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}

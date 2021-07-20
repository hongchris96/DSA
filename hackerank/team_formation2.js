function countTeams(skills, minPlayers, minLevel, maxLevel) {
  // Write your code here
  let count = 0;
  let storage = {};
  for (let i = 0; i < skills.length; i++) {
      if (skills[i] <= maxLevel && skills[i] >= minLevel) {
          count += 1;
      }
  }
  let answer = 0;
  // add all combinations with count pick player, starting with minPlayer
  for (let player = minPlayers; player <= count; player ++) {
      answer += facto(count, storage) / (facto(count - player, storage) * facto(player, storage));
  }
  return answer;
}

// efficient factorials
function facto(number, storage) {
  if (number === 0) return 1;
  if (number in storage) {
      return storage[number];
  }
  let thisFac = number * facto(number - 1, storage);
  storage[number] = thisFac;
  return thisFac;
}
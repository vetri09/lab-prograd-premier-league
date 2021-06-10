//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager()
{
  return [managerName, managerAge, currentTeam, trophiesWon];
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation()
{
  return obj = {
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2]
  };
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year)
{
  let selectedPlayers=[];
  players.forEach(
    value => {
      value.debut==year ? selectedPlayers.push(value): null;
    }
  )
  return selectedPlayers;
  // for(let i=0; i<players.length; i++)
  // {
  //   if(players[i].debut==year)
  //   {
  //     selectedPlayers.push(players[i]);
  //   }
  // }
  // return selectedPlayers;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position)
{
  let selectedPlayers=[];
  players.forEach(
    value => {
      value.position==position ? selectedPlayers.push(value): null;
    }
  )
  return selectedPlayers;
}
//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName)
{
  let awardedPlayers = [];
  players.forEach(
    value => {
      value.awards.forEach(
        value1 => {
          value1.name == awardName ? awardedPlayers.push(value): null;
        }
      )
    }
  )
  return awardedPlayers;
}
//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes)
{
  
}
//Progression 7 - Filter players that won ______ award and belong to ______ country

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order

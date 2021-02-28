module.exports = function calculateHanoi(diskNumber,turnsSpeed) {
  let turns=2**diskNumber-1
  let speed=turnsSpeed/3600
  let sec=Math.floor(turns/speed)
  let solution= new Hanoi(turns,sec)
  return solution
};


function Hanoi(tur,sec)
{
  this.turns=tur
  this.seconds=sec
}
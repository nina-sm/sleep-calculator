
 const getSleepHours = day => {
  
  switch(day) {
  case 'monday': return 8;
  break;
  case 'tuesday': return 7;
  break;
   case 'wednesday': return 6;
  break;
  case 'thursday': return 5;
  break;
   case 'friday': return 7;
  break;
  case 'saturday': return 10;
  break;
  case 'sunday': return 11;
  break;
  }
 };
console.log(getSleepHours('monday'));
console.log(getSleepHours('sunday'));

const getActualSleepHours = () =>  
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

console.log(getActualSleepHours());
console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

 if (idealSleepHours === actualSleepHours) {  console.log('You got perfect amount of sleep!');}  else if (idealSleepHours < actualSleepHours) { 'You slept ' + (actualSleepHours - idealSleepHours) + ' hours too much'} 
 else if (idealSleepHours > actualSleepHours) { console.log('You slept too little! You need to sleep ' + (idealSleepHours - actualSleepHours) + ' more hours');
 }
}

console.log(calculateSleepDebt());

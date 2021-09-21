const findTheOldest = function(people) {

    for(let person in people) {
      if ('yearOfDeath' in people[person] === false) {
        people[person].yearOfDeath = new Date().getFullYear();
      }
    }
  
  
  
      const oldest = people.sort(function(a, b) {
          const lastPerson = a.yearOfDeath - a.yearOfBirth;
          const nextPerson = b.yearOfDeath - b.yearOfBirth;
          return lastPerson > nextPerson ? -1 : 1;
        });
      
      return oldest[0];
  
  };

module.exports = findTheOldest;

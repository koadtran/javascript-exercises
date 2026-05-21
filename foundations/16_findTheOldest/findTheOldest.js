const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        let currentAge = getAge(person.yearOfBirth, person.yearOfDeath);
        return (oldestAge < currentAge) ? person : oldest;
    });
};

const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};
// Do not edit below this line
module.exports = findTheOldest;

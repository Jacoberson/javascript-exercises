const findTheOldest = function (arr) {
    arr.forEach(person => {
        let deathDate;
        if (!person.yearOfDeath) {
            deathDate = (new Date()).getFullYear();
        } else {
            deathDate = person.yearOfDeath
        }
        person['age'] = deathDate - person.yearOfBirth
    });

    return arr.sort((a, b) => b.age > a.age ? 1 : -1)[0];
};

// Do not edit below this line
module.exports = findTheOldest;

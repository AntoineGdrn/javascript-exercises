const findTheOldest = function(people) {
    let theOldest = {};
    const currentYear = 2025;

    people.forEach(element => {
        let age;
        if (element.yearOfDeath) {
            age = element.yearOfDeath-element.yearOfBirth;
        } else {
            age = currentYear-element.yearOfBirth;
        }

        console.log(theOldest.age)

        if (theOldest.age < age || theOldest.age === undefined) {
            theOldest = element;
            element.age = age;
        }
        console.log(age)
    });

    return theOldest
};

// Do not edit below this line
module.exports = findTheOldest;

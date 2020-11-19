function Util() {
  function calculateTotalDistributedPassengers(distributedPassengers) {
    // Prepare total distributed passengers.
    let totalDistributedPassengers = 0;

    // Build total distributed passengers.
    let value;
    for (value in distributedPassengers) {
      totalDistributedPassengers += distributedPassengers[value];
    }

    // Return total distributed passengers.
    return totalDistributedPassengers;
  }

  function calculateTotalNumberOfPassengers(passengersArray) {
    // Prepare total number of passengers.
    let totalNumberOfPassengers = 0;

    // Build total number of passengers.
    let passengers;
    for (passengers of passengersArray) {
      totalNumberOfPassengers += passengers;
    }

    // Return total number of passengers.
    return totalNumberOfPassengers;
  }

  // No need to go through this myself - copy and paste.
  function checkInput(input) {
    if (!input) {
      throw new Error("Incorrect values. Check all input fields to be filled in.");
    }
    if (isNaN(input)) {
      throw new Error("Incorrect values. Check all input fields to be numbers.");
    }
  }

  function calculateTotalDistance(distancesArray) {
    let totalDistance = 0;
    let distance;
    for (distance of distancesArray) {
      if (distance < 0) {
        continue;
      }
      totalDistance += distance;
    }
    return totalDistance;
  }

  function calculateBonusPoints(businessDistancesArray, economyDistancesArray, businessBonus, economyBonus) {
    let totalBusinessDistance = calculateTotalDistance(businessDistancesArray);
    let totalEconomyDistance = calculateTotalDistance(economyDistancesArray);
    let points = (businessBonus * totalBusinessDistance) / 100 + (economyBonus * totalEconomyDistance) / 100;
    return points;
  }

  return { calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput, calculateTotalDistance, calculateBonusPoints };
}



module.exports = Util();
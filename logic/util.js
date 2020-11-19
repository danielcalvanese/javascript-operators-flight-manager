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

  return { calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers };
}

module.exports = Util();
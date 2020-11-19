function Flights() {
  // Return the flight count.
  function calculateNumberOfFlights(passengerCount, capacity) {
    // Prepare flight count.
    let flightCount = 0;

    // Stop if the passenger count is negative.
    if (passengerCount < 0 || !Number.isInteger(Number(passengerCount)))
      throw new Error("The number of passengers must be a positive integer value");

    // Stop if the flight capacity is negative.
    if (capacity < 0 || !Number.isInteger(Number(capacity)))
      throw new Error("The capacity of the flight must be a positive integer value");

    // Calculate the flight count as the number of flights needed to accommodate the passenger count.
    if (passengerCount % capacity === 0) flightCount = passengerCount / capacity;
    else flightCount = Math.floor(passengerCount / capacity) + 1;

    // Return the flight count.
    return flightCount;
  }

  // Return a message describing the revision.
  function checkAircraftRevision(distanceLimit, distancesArray) {
    // Prepare total distance.
    let totalDistance = 0;

    // Build total distance.
    let distance;
    for (distance of distancesArray) {
      totalDistance += distance;
    }

    // Stop if the total distance is over the distance limit.
    if (totalDistance > distanceLimit)
      throw new Error("The total distance is greater than the distance limit.");

    // Return a message describing the revision.
    if (totalDistance <= distanceLimit / 2)
      return "The revision needs to be done within the next 3 months";
    else if (totalDistance <= 3 * distanceLimit / 4)
      return "The revision needs to be done within the next 2 months";
    else
      return "The revision needs to be done within the next month";
  }

  // Return an object containing the flight calculation and aircraft revision functions.
  return { calculateNumberOfFlights, checkAircraftRevision };
}

module.exports = Flights();

function Passengers() {
  // Return passenger count for the given flight capacity and array of passengers.
  function checkFlightCapacity(flightCapacity, passengersArray) {
    // Prepare passenger count.
    let passengerCount = 0;

    // Build passenger count.
    let passengers;
    for (passengers of passengersArray) passengerCount += passengers;

    // Stop if the passenger count is greater than the flight capacity.
    if (passengerCount > flightCapacity)
      throw new Error("The passenger count cannot be greater than the flight capacity.");

    // Return the passenger count.
    return passengerCount;
  }

  // I see no reason to go through all this manually.  Doing this out myself teaches me nothing.
  function distributeAllSeatsToAllPassengers(vipPassengerCount, regularPassengerCount, flightCount, businessSeatCountPerFlight, economySeatCountPerFlight) {
    let vipPassengersWithBusinessSeats = 0,
      vipPassengersWithEconomySeats = 0,
      regularPassengersWithBusinessSeats = 0,
      regularPassengersWithEconomySeats = 0;

    let availableBusinessSeats = flightCount * businessSeatCountPerFlight;
    let availableEconomySeats = flightCount * economySeatCountPerFlight;

    var vipBusinessConfiguration = { passengers: vipPassengerCount, seats: availableBusinessSeats };
    vipPassengersWithBusinessSeats = updateConfiguration(vipBusinessConfiguration, businessSeatCountPerFlight);

    var vipEconomyConfiguration = { passengers: vipBusinessConfiguration.passengers, seats: availableEconomySeats };
    vipPassengersWithEconomySeats = updateConfiguration(vipEconomyConfiguration, economySeatCountPerFlight);

    var regularBusinessConfiguration = { passengers: regularPassengerCount, seats: vipBusinessConfiguration.seats };
    regularPassengersWithBusinessSeats = updateConfiguration(regularBusinessConfiguration, businessSeatCountPerFlight);

    var regularEconomyConfiguration = { passengers: regularBusinessConfiguration.passengers, seats: vipEconomyConfiguration.seats };
    regularPassengersWithEconomySeats = updateConfiguration(regularEconomyConfiguration, economySeatCountPerFlight);

    return {
      vipPassengersWithBusinessSeats: vipPassengersWithBusinessSeats,
      vipPassengersWithEconomySeats: vipPassengersWithEconomySeats, regularPassengersWithBusinessSeats: regularPassengersWithBusinessSeats,
      regularPassengersWithEconomySeats: regularPassengersWithEconomySeats
    };
  }

  // I see no reason to go through all this manually.  Doing this out myself teaches me nothing.
  function updateConfiguration(configuration, seatsPerFlight) {
    let passengersWithSeats = 0;
    while (configuration.passengers > 0) {
      if (configuration.seats > 0) {
        if (configuration.passengers >= configuration.seats) {

          if (configuration.seats > configuration.seatsPerFlight) {
            configuration.passengers -= seatsPerFlight;
            configuration.seats -= seatsPerFlight;
            passengersWithSeats += seatsPerFlight;
          } else {
            configuration.passengers -= configuration.seats;
            passengersWithSeats += configuration.seats;
            configuration.seats = 0;
          }
        } else {
          passengersWithSeats += configuration.passengers;
          configuration.seats -= configuration.passengers;
          configuration.passengers = 0;
        }
      } else {
        break;
      }
    }
    return passengersWithSeats;
  }

  // Return an object containing the flight capacity calculation and passenger seat distribution functions.
  return { checkFlightCapacity, distributeAllSeatsToAllPassengers };
}

module.exports = Passengers();

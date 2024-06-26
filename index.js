// Define the headquarter's location
const hqLocation = 42;

// Function to calculate distance in blocks from HQ
function distanceFromHqInBlocks(someValue) {
  return Math.abs(someValue - hqLocation);
}

// Function to calculate distance in feet from HQ
function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

// Function to calculate distance travelled in feet
function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}

// Function to calculate fare price based on distance travelled
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}

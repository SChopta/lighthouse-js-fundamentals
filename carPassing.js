const carPassing = function(cars, speed) {
  const newReading = {
    time: Date.now(),
    speed
  };
  cars.push(newReading);
  return cars;
}
const chooseStations = (stations) => {
  const goodStations = []
  
  for (const station of stations) {
    
    const  capacity = station[1]
    
    if (capacity >= 20) {
      const type = station[2]
      if (type === "community centre" || type === "school") {
      goodStations.push(station[0])
    }
    }
  }
  return goodStations
}
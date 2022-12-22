const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

//want station with at least 20 ppl capacity, and must be school or community center

//create and declare function
function chooseStations (stations) {
  //declare variable to set up array
  const goodStations = []
  //this says: for every station of all of the stations
  for (const station of stations) {
    //item at index 1 gives us info about capacity
    //declare new variable to assess this
    const capacity = station [1]
    //set if condition to filter venues that have a capacity equal to or greater than 20
    if (capacity >= 20) {
      
      //set condition to filter out schools and community centres
      const type = station [2]
      if (type === "school" || type === "community centre") {
        //want to push the list of stations into a single array
        goodStations.push(station[0])

      }
    }
  }
  //return value so that you can console.log it outside of the function
  return goodStations
}

console.log(chooseStations(stations))




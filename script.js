generateMessage = () => {

    // Variables for random message generation
    const weather = ['raining', 'snowing', 'sunny', 'overcast', 'sleeting', 'freezing'];
    const location = ['Glasgow', 'Berlin', 'Paris', 'Madrid', 'Copenhagen', 'New York', 'Tokyo', 'Sydney', 'Moscow', 'Athens'];
    const activity = ['sleep', 'cycle', 'run', 'swim', 'eat'];

    // Random number generator for each array
    let randWeather = Math.floor(Math.random() * weather.length);
    let randLoc = Math.floor(Math.random() * location.length);
    let randActivity = Math.floor(Math.random() * activity.length);
    
    // Final message logged to console
    console.log('When it is ' + (weather[randWeather]) + ' in ' + (location[randLoc]) + ', I like to ' + (activity[randActivity]));
}
   
generateMessage();




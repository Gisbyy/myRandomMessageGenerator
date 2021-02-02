// Random message generator

generateMessage = () => {

    // Variables for random message generation
    const weather = ['raining', 'snowing', 'sunny', 'overcast', 'sleeting', 'freezing'];
    const location = ['Glasgow', 'Berlin', 'Paris', 'Madrid', 'Copenhagen', 'New York', 'Tokyo', 'Sydney', 'Moscow', 'Athens'];
    const activity = ['sleep', 'cycle', 'run', 'swim', 'eat'];

    // Random generator for each array, placed in variable
    let randWeather = weather[Math.floor(Math.random() * weather.length)];
    let randLoc = location[Math.floor(Math.random() * location.length)];
    let randActivity = activity[Math.floor(Math.random() * activity.length)];
    
    // Final message logged to console
    console.log('When it is ' + randWeather + ' in ' + randLoc + ', I like to ' + randActivity + '.');
}
   
generateMessage();


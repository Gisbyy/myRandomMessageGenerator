// Variables for weather message generation
const randomMessage = {
    location: ['Glasgow', 'Berlin', 'Paris', 'Madrid', 'Copenhagen', 'New York', 'Tokyo', 'Sydney', 'Moscow', 'Athens'],
    weather: ['Raining', 'Snowing', 'Sunny', 'Overcast', 'Sleeting', 'Freezing'],
    activity: ['Sleep', 'Cycle', 'Run', 'Swim', 'Eat'],
    generateMessage(){
        let randLoc = Math.floor(Math.random() * this.location.length);
        let randWeather = Math.floor(Math.random() * this.weather.length);
        let randActivity = Math.floor(Math.random() * this.activity.length);
        
    }
}





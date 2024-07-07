function checkSpeed() {
    //Get user input for car
    let speed = prompt("Enter the speed of the car (in km/h):");


    speed = Number(speed);
    // Calculate demerit points and license suspension status
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    // Check if the car is within the legal speed limit and calculate demerit points if necessary. Otherwise, print the number of demerit points or license suspension status.

    if (speed <= speedLimit) {
        console.log("Okay!");
    } else {
        let demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        console.log(demeritPoints);

        if (demeritPoints > 12) {
            console.log("License suspended");
        }
    }
}

// Call the function
checkSpeed();
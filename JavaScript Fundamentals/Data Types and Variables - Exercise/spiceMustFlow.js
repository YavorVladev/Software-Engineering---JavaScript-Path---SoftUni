function spiceMustFlow(startingYield) {

    let days = 0;
    const workersConsumes = 26;
    const dailyDrop = 10;
    let extractedSpice = 0;

    while (startingYield >= 100) {
        days += 1;
        extractedSpice += startingYield;
        startingYield -= dailyDrop;
        if (extractedSpice >= workersConsumes) {
            extractedSpice -= workersConsumes;
        }


    }

    if (extractedSpice >= workersConsumes) {
        extractedSpice -= workersConsumes;
    }

    console.log(days);
    console.log(extractedSpice)

}

spiceMustFlow(450)
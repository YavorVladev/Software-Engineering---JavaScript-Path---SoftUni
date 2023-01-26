function mine(shift) {
    const bitcoinPrice = 11949.16;
    const goldPrice = 67.51;
    const theftRate = 0.3;
  
    let totalGold = 0;
    let totalBitcoins = 0;
    let dayOfFirstBitcoin = 0;
    let i = 0;
    while (i < shift.length) {
        if ((i + 1) % 3 === 0) {
            totalGold += (shift[i] * goldPrice) * (1 - theftRate);
        } else {
            totalGold += shift[i] * goldPrice;
        }
        while (totalGold >= bitcoinPrice) {
            totalGold -= bitcoinPrice;
            totalBitcoins++;
            if (dayOfFirstBitcoin === 0) {
                dayOfFirstBitcoin = i + 1;
            }
        }
        i++;
    }
  
    console.log(`Bought bitcoins: ${totalBitcoins}`);
    if (dayOfFirstBitcoin > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
    }
    console.log(`Left money: ${totalGold.toFixed(2)} lv.`);
}

mine([3124.15, 504.212, 2511.124])

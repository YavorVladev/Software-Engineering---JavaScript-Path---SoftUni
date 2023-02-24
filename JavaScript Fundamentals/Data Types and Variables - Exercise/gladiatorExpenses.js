function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let totalExpenses = 0;
    let trashedHelmet = 0;
    let trashedSword = 0;
    let trashedShield = 0;
    let trashedArmor = 0;


    for (let i = 1; i <= lostFights; i++) {

        if (i % 2 == 0 && i % 3 == 0) {
            totalExpenses += shieldPrice;
            trashedShield += 1;
        }


        if (i % 2 == 0) {
            totalExpenses += helmetPrice;
            trashedHelmet += 1;
        } if (i % 3 == 0) {
            totalExpenses += swordPrice;
            trashedSword += 1;
        }





        if (trashedShield % 2 == 0 && trashedShield != 0) {
            totalExpenses += armorPrice;
            trashedArmor += 1;
            trashedShield = 0;
        }


    }


    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}

gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200
)
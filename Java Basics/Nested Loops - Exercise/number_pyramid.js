function solve ([arg1]) {

    let n = Number(arg1)

    let num = 1;

    for(let row = 1; row <= n; row++) {

        for(let col = 1; col <= row; col++){

            process.stdout.write(num + " ")

            num++;

            if (num > n) {

                break;

            }

        }

        console.log();
      if (num > n) {

                break;

            }


    }

}

solve(['12'])
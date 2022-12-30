function guess_password(input){
    let real_password = "s3cr3t!P@ssw0rd";
    let input_password = input[0];
    if (input_password == real_password) {
        console.log("Welcome");

    } else {
        console.log("Wrong password!");
    }

}

guess_password(["s3cr3t!P@ssw0rd"])
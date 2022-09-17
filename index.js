const input = require('sync-input');
console.log("Welcome to Currency Converter!");
console.log("1 USD equals 1 USD");
console.log("1 USD equals 113.5 JPY");
console.log("1 USD equals 0.89 EUR");
console.log("1 USD equals 74.36 RUB");
console.log("1 USD equals 0.75 GBP");
while(true) {
    console.log("What do you want to do?");
    console.log("1-Convert currencies 2-Exit program");

    let chs = Number(input(""));

    if (chs == 2) {
        console.log("Have a nice day!");
        break;

    } else if (chs == 1) {
        console.log("What do you want to convert?");

        let a_usd = 1;
        let a_jpy = 113.5;
        let a_eur = 0.89;
        let a_rub = 74.36;
        let a_gbp = 0.75;

        let b_usd = 1;
        let b_jpy = 113.5;
        let b_eur = 0.89;
        let b_rub = 74.36;
        let b_gbp = 0.75;

        let a;
        let b;

        let fval = input("From: ");
        if (fval.length != 3) {
            console.log("Unknown currency");
        } else {
            let val = input("To: ");
            if (val.length != 3) {
                console.log("Unknown currency");
            } else {
                let am = Number(input("Amount: "));
                if (isNaN(am) == true) {
                    console.log("The amount has to be a number");
                } else if (am < 1) {
                    console.log("The amount cannot be less than 1");
                } else {
                    let valute = val.toUpperCase();
                    let fvalute = fval.toUpperCase();
                    let res;

                    switch (fvalute) {
                        case "USD":
                            a = a_usd;
                            break;
                        case "JPY":
                            a = a_jpy;
                            break;
                        case "EUR":
                            a = a_eur;
                            break;
                        case "RUB":
                            a = a_rub;
                            break;
                        case "GBP":
                            a = a_gbp;
                            break;
                        default:
                            console.log("Unknown currency");
                            break;
                    }
                    switch (valute) {
                        case "USD":
                            b = b_usd;
                            break;
                        case "JPY":
                            b = b_jpy;
                            break;
                        case "EUR":
                            b = b_eur;
                            break;
                        case "RUB":
                            b = b_rub;
                            break;
                        case "GBP":
                            b = b_gbp;
                            break;
                        default:
                            console.log("Unknown currency");
                            break;
                    }

                    res = 1 / a * am * b;

                    console.log(`Result: ${am} ${fvalute} equals ${res.toFixed(4)} ${valute}`);

                }
            }
        }
    } else {
        console.log("Unknown input");
        continue;
    }
}





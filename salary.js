function calculateNetSalary() {
    //variable declaration
    let basicSalary = Number(prompt("Enter the basic salary !"));
    let benefits = Number(prompt("Enter the benefits !"));


    let grossSalary = basicSalary + benefits;


    let payee = calculatePAYE(grossSalary);


    let nhifDeduction = calculateNHIF(grossSalary);


    let nssfDeduction = calculateNSSF(grossSalary);

    let netSalary = grossSalary - payee - nhifDeduction - nssfDeduction;

    //print output    
    console.log(grossSalary);
    console.log(payee);
    console.log(nhifDeduction);
    console.log(nssfDeduction);
    console.log(netSalary);
}
//calculate gross salary
function calculatePAYE(grossSalary) {
    let payee = 0;

    if (grossSalary <= 24000) {
        payee = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        payee = 2400 + ((grossSalary - 24000) * 0.25);
    } else {
        payee = 2400 + (8333 * 0.25) + ((grossSalary - 32333) * 0.3);
    }
    return payee;
}
//NHIF calculations
function calculateNHIF(grossSalary) {

    if (grossSalary <= 5999) return 150;
    else if (grossSalary <= 7999) return 300;
    else if (grossSalary <= 11999) return 400;
    else if (grossSalary <= 14999) return 500;
    else if (grossSalary <= 19999) return 600;
    else if (grossSalary <= 24999) return 750;
    else if (grossSalary <= 29999) return 850;
    else if (grossSalary <= 34999) return 900;
    else if (grossSalary <= 39999) return 950;
    else if (grossSalary <= 44999) return 1000;
    else if (grossSalary <= 49999) return 1100;
    else if (grossSalary <= 59999) return 1200;
    else if (grossSalary <= 69999) return 1300;
    else if (grossSalary <= 79999) return 1400;
    else if (grossSalary <= 89999) return 1500;
    else if (grossSalary <= 99999) return 1600;
    else return 1700;
}

function calculateNSSF(grossSalary) {
    return Math.min(grossSalary * 0.06, 1800);
}


calculateNetSalary();
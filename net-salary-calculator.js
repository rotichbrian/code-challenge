// Function to calculate Payee (Tax) based on the provided tax rates
function calculatePayee(grossSalary) {
    const nssfDeductions = calculateNSSFDeductions(grossSalary);
    const nhifDeductions = calculateNHIFDeductions(grossSalary);
    taxablePay = grossSalary - nssfDeductions;
    const taxBracket1 = 24000;
    const taxBracket2 = 32333;
    const taxRate1 = 0.1;
    const taxRate2 = 0.25;
    const taxRate3 = 0.3;
    const personalRelief = 2400;
    nhifDeductionsTax = nhifDeductions*0.15;
  
    let payee = 0;
  
    if (taxablePay <= taxBracket1) {
      payee = taxablePay  * taxRate1; // 10% tax rate
    } else if (taxablePay  <= taxBracket2) {
      payee = ((taxablePay  - taxBracket1) * taxRate2) + (taxBracket1 * taxRate1); // 25% tax rate
    } else {
      payee = ((taxablePay  - taxBracket2) * taxRate3) + ((taxBracket2 - taxBracket1) * taxRate2) + (taxBracket1 * taxRate1); // 30% tax rate
    }
  
    return payee - (nhifDeductionsTax + personalRelief);
  }
  
  
  // Function to calculate NHIF Deductions based on the provided NHIF rates
    function calculateNHIFDeductions(grossSalary) {
    if (grossSalary <= 5999) {
      return 150;
    } else if (grossSalary <= 7999) {
      return 300;
    } else if (grossSalary <= 11999) {
      return 400;
    } else if (grossSalary <= 14999) {
      return 500;
    } else if (grossSalary <= 19999) {
      return 600;
    } else if (grossSalary <= 24999) {
      return 750;
    } else if (grossSalary <= 29999) {
      return 850;
    } else if (grossSalary <= 34999) {
      return 900;
    } else if (grossSalary <= 39999) {
      return 950;
    } else if (grossSalary <= 44999) {
      return 1000;
    } else if (grossSalary <= 49999) {
      return 1100;
    } else if (grossSalary <= 59999) {
      return 1200;
    } else if (grossSalary <= 69999) {
      return 1300;
    } else if (grossSalary <= 79999) {
      return 1400;
    } else if (grossSalary <= 89999) {
      return 1500;
    } else if (grossSalary <= 99999) {
      return 1600;
    } else {
      return 1700;
    }
  }
  
  // Function to calculate NSSF Deductions based on the provided NSSF rates
    function calculateNSSFDeductions(grossSalary) {
    if (grossSalary <= 6000) {
      nssfDeductions = grossSalary * 0.06;
    } else{
      nssfDeductions =(18000 - 6000) * 0.06 + (6000 * 0.06);
    }
    return nssfDeductions;
  }
  
  // Function to calculate the gross salary by adding the basic salary and benefits
  function calculateGrossSalary(basicSalary, benefits) {
      return basicSalary + benefits;
  }
  
  // Function to calculate the net salary by subtracting the deductions from the gross salary
  function calculateNetSalary(basicSalary, benefits) {
      const  grossSalary = calculateGrossSalary(basicSalary, benefits)
      const payee = calculatePayee(grossSalary);
      const nhifDeductions = calculateNHIFDeductions(grossSalary);
      const nssfDeductions = calculateNSSFDeductions(grossSalary);
      const netSalary = grossSalary - (payee + nhifDeductions + nssfDeductions);
      return {
        grossSalary: grossSalary,
        netSalary: netSalary,
        nhifDeductions: nhifDeductions,
        nssfDeductions: nssfDeductions,
        payee: payee
      };
  }
  
  console.log(calculateNetSalary(52500, 0));
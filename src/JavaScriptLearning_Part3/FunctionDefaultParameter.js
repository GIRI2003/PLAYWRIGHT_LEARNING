
// Function with default parameter

function sale(bill, discount = 100) {
    finalBill = bill - discount;
    console.log(finalBill);
}

// calling the function using default parameter
sale(2000); //1900
sale(2000, 500); //1500 -> if we give second paramter, then it will override the default paramter


// Mandatory paramter should be passed at starting, 
// default paramter should be passed at end

function marks(practicalMark = 25, theoryMark) { // Default paramter should always be at the end
    totalMark = theoryMark + practicalMark;
    console.log(totalMark);
}

marks(75); // NaN -> practicalMark(75) & theoryMark(Undefined) -> NaN
// marks( , 75); // we can't write like this, so Mandatory parameter should be passed always at beginning



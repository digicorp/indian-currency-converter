function thausandFormatConverter(number) {
    var convertedValue = "";
    var originalNumber = Math.abs(Number(number));
    if (originalNumber > 0 && originalNumber <= 999) {
        if (originalNumber / 100 <= 1) {
            convertedValue = originalNumber / 100 + " Hundred";
        } else {
            convertedValue = originalNumber / 100 + " Hundreds";
        }
    } else if (originalNumber > 999 && originalNumber <= 99999) {
        if (originalNumber / 1000 <= 1) {
            convertedValue = originalNumber / 1000 + " Thausand";
        } else {
            convertedValue = originalNumber / 1000 + " Thausands";
        }
    } else if (originalNumber > 99999 && originalNumber <= 9999999) {
        if (originalNumber / 100000 <= 1) {
            convertedValue = originalNumber / 100000 + " Lakh";
        } else {
            convertedValue = originalNumber / 100000 + " Lakhs";
        }
    } else if (originalNumber > 9999999) {
        if (originalNumber / 10000000 <= 1) {
            convertedValue = originalNumber / 10000000 + " Crore";
        } else {
            convertedValue = originalNumber / 10000000 + " Crores";
        }
    } else {
        convertedValue = originalNumber + "";
    }
    if (number < 0) {
        convertedValue = "-" + convertedValue;
    }
    return convertedValue;
}

function convertToINR(number, isSymbolRequired) {
    if (isSymbolRequired == true) {
        return Number(number).toLocaleString('hi-IN', {
            style: "currency",
            currency: "INR"
        });
    } else {
        return Number(number).toLocaleString('hi-IN', {
            currency: "INR"
        });
    }
}

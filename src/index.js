module.exports = function toReadable(number) {
    let strNumber = String(number);
    let firstN = "";
    let secondN = "";
    let thirdN = "";
    if (number <= 9) {
        switch (strNumber[strNumber.length - 1]) {
            case "0":
                firstN = "zero";
            case "1":
                firstN = "one";
                break;
            case "2":
                firstN = "two";
                break;
            case "3":
                firstN = "three";
                break;
            case "4":
                firstN = "four";
                break;
            case "5":
                firstN = "five";
                break;
            case "6":
                firstN = "six";
                break;
            case "7":
                firstN = "seven";
                break;
            case "8":
                firstN = "eight";
                break;
            case "9":
                firstN = "nine";
                break;
        }
        return firstN;
    } else if (number > 9 && number < 100) {
        if (strNumber[strNumber.length - 2] === "1") {
            switch (strNumber[strNumber.length - 2]) {
                case "0":
                    firstN = "ten";
                case "1":
                    firstN = "eleven";
                    break;
                case "2":
                    firstN = "twelf";
                    break;
                case "3":
                    firstN = "threeteen";
                    break;
                case "4":
                    firstN = "fourteen";
                    break;
                case "5":
                    firstN = "fiveteen";
                    break;
                case "6":
                    firstN = "sixteen";
                    break;
                case "7":
                    firstN = "seventeen";
                    break;
                case "8":
                    firstN = "eightteen";
                    break;
                case "9":
                    firstN = "nineteen";
                    break;
            }
            return firstN;
        } else if (Number(strNumber[strNumber.length - 2]) > 1) {
            switch (strNumber[strNumber.length - 1]) {
                case "2":
                    secondN = "twenty";
                    break;
                case "3":
                    secondN = "thirty";
                    break;
                case "4":
                    secondN = "forty";
                    break;
                case "5":
                    secondN = "fifty";
                    break;
                case "6":
                    secondN = "sixty";
                    break;
                case "7":
                    secondN = "seventy";
                    break;
                case "8":
                    secondN = "eighty";
                    break;
                case "9":
                    secondN = "ninety";
                    break;
            }
            switch (strNumber[strNumber.length - 1]) {
                case "0":
                    firstN = "zero";
                case "":
                    firstN = "one";
                    break;
                case "2":
                    firstN = "two";
                    break;
                case "3":
                    firstN = "three";
                    break;
                case "4":
                    firstN = "four";
                    break;
                case "5":
                    firstN = "five";
                    break;
                case "6":
                    firstN = "six";
                    break;
                case "7":
                    firstN = "seven";
                    break;
                case "8":
                    firstN = "eight";
                    break;
                case "9":
                    firstN = "nine";
                    break;
            }
            return secondN + firstN;
        }
    } else if (number > 99) {
        if (strNumber[strNumber.length - 2] === "1") {
            switch (strNumber[strNumber.length - 3]) {
                case "1":
                    thirdN = "one";
                    break;
                case "2":
                    thirdN = "two";
                    break;
                case "3":
                    thirdN = "three";
                    break;
                case "4":
                    thirdN = "four";
                    break;
                case "5":
                    thirdN = "five";
                    break;
                case "6":
                    thirdN = "six";
                    break;
                case "7":
                    thirdN = "seven";
                    break;
                case "8":
                    thirdN = "eight";
                    break;
                case "9":
                    thirdN = "nine";
                    break;
            }
            switch (strNumber[strNumber.length - 1]) {
                case "0":
                    firstN = "ten";
                    break;
                case "1":
                    firstN = "eleven";
                    break;
                case "2":
                    firstN = "twelve";
                    break;
                case "3":
                    firstN = "thirteen";
                    break;
                case "4":
                    firstN = "fourteen";
                    break;
                case "5":
                    firstN = "fifteen";
                    break;
                case "6":
                    firstN = "sixteen";
                    break;
                case "7":
                    firstN = "seventeen";
                    break;
                case "8":
                    firstN = "eighteen";
                    break;
                case "9":
                    firstN = "nineteen";
                    break;
            }
            return thirdN + " hundred " + firstN;
        }else {
        switch (strNumber[strNumber.length - 3]) {
            case "1":
                thirdN = "one";
                break;
            case "2":
                thirdN = "two";
                break;
            case "3":
                thirdN = "three";
                break;
            case "4":
                thirdN = "four";
                break;
            case "5":
                thirdN = "five";
                break;
            case "6":
                thirdN = "six";
                break;
            case "7":
                thirdN = "seven";
                break;
            case "8":
                thirdN = "eight";
                break;
            case "9":
                thirdN = "nine";
                break;
        }
        switch (strNumber[strNumber.length - 2]) {
            case "2":
                secondN = "twenty";
                break;
            case "3":
                secondN = "thirty";
                break;
            case "4":
                secondN = "forty";
                break;
            case "5":
                secondN = "fifty";
                break;
            case "6":
                secondN = "sixty";
                break;
            case "7":
                secondN = "seventy";
                break;
            case "8":
                secondN = "eighty";
                break;
            case "9":
                secondN = "ninety";
                break;
        }
        switch (strNumber[strNumber.length - 1]) {
            case "0":
                firstN = "";
                break;
            case "1":
                firstN = "one";
                break;
            case "2":
                firstN = "two";
                break;
            case "3":
                firstN = "three";
                break;
            case "4":
                firstN = "four";
                break;
            case "5":
                firstN = "five";
                break;
            case "6":
                firstN = "six";
                break;
            case "7":
                firstN = "seven";
                break;
            case "8":
                firstN = "eight";
                break;
            case "9":
                firstN = "nine";
                break;
        }

        return thirdN + " hundred " + secondN + " " + firstN;
    }
}else {
        return "more one thousand";
    }
}

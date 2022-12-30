//add leading zeros
const zeroPad = (num, places) => String(num).padStart(places, '0')

const formatDate = (value) => {

    //safe check for null or undefined values
    if(!value) return "";

    if(value instanceof Date) {

        const year = value.getFullYear();
        const yearZ = zeroPad(year, 4);

        //month in date object starts from 0
        const month = value.getMonth() + 1;
        const monthZ = zeroPad(month, 2);

        const day = value.getDate();
        const dayZ = zeroPad(day, 2);

        //an example of string interpolation in JS
        const res = `${yearZ}-${monthZ}-${dayZ}`;

        return res;
    } else {
        //for string values
        return value;
    }
};
let fmt = {};
fmt.formatDate = formatDate;
module.exports = fmt;

// getter, setter

let user = {
    year: 2001,
    month: 6,

    get yearMonth() {
        return `${year}-${month}`;
    },

    set yearMonth(value) {
        [this.year, this.month] = value.split('-').map(va => +va);
    },
};

user.yearMonth = '2002-04';

console.log(user.year); // 2002
console.log(user.month); // 4
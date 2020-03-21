const groupNumber = input => {
    const newInput = input.match(/\d/g);

    let newArr = [];

    if (newInput.length % 3 === 0 || newInput.length % 3 === 2) {
        for (let a = 0; a < newInput.length; a += 3) {
            newArr.push(newInput.slice(a, a + 3));
        }
        return newArr.map(el1 => el1.join('')).join('-');

    } else if (newInput.length % 3 === 1) {
        for (let a = 0; a < newInput.length; a += 3) {
            if (a === newInput.length - 4) {
                newArr.push(newInput.slice(a, a + 2));
                newArr.push(newInput.slice(a + 2, a + 4));
                a += 3;
            } else {
                newArr.push(newInput.slice(a, a + 3));
            }
        }
        return newArr.map(el1 => el1.join('')).join('-');
    }
};

groupNumber('993141 -1 1323 14-232');
groupNumber('993141 -1 1323 14-23');
groupNumber('993141 -1 1323 14-2');

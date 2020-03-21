const triangle = angka => {    
    if (Number.isInteger(angka) && angka > 0) {
        let arr = [];
        for (let i=0; i<angka; i++) {
            let arr1 = new Array();
            for (let j=0; j<=i; j++) {
                arr1.push('#');
            }
            arr.push(arr1);
            arr1 = [];
        }
        return arr.join('\n').replace(/[,]/g, '');

        // ATAU
        // arr.forEach(el => {
        //     console.log(el.join('').replace(/[,]/g, ''));
        // });
    } else {
        return 'Paramater harus angka dan positif';        
    };
};

triangle(5);

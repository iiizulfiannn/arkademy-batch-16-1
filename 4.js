const longest = kalimat => {
    // selain huruf dan spasi ganti dengan ''
    let newKalimat = kalimat.replace(/[^\w\s]/, '')

    // pisah kata parameternya spasi
    newKalimat = newKalimat.split(/[\s]+/);

    // setiap element hitung panjang kata
    const panjangKata = newKalimat.map(el => el.length);

    // cari nilai terbesar
    const newK = Math.max(...panjangKata);

    // cari element kata dengan nilai terbesar
    const final = newKalimat.find(el => el.length === newK);
    
    return final;
}

longest('Halo Arkademian!');
longest('Seluruh Arkademian mengucapkan selamat Ramadhan!');
longest('Baju ini sangat bagus sekali!');

const myProfile = () => {
    return {
        name: 'Zulfian',
        age: 23,
        address: 'Pontianak, Kalimantan Barat',
        hobbies: [ 'Jogging', 'Design', 'DIY' ],
        is_married: false,
        list_school: [
            {
                name: 'SMAN 2 SANGGAU',
                year_in: 2010,
                year_out: 2013,
                major: 'IPA'
            },
            {
                name: 'POLITEKNIK NEGERI PONTIANAK',
                year_in: 2013,
                year_out: 2016,
                major: 'D3 Teknik Informatika'
            }
        ],
        skills: [
            {
                skill_name: 'Javascript',
                level: 'beginner'
            },
            {
                skill_name: 'HTML & CSS',
                level: 'advanced'
            },
            {
                skill_name: 'NodeJS',
                level: 'beginner'
            },
            {
                skill_name: 'MySQL',
                level: 'advanced'
            },
            {
                skill_name: 'Photoshop & Corel Draw',
                level: 'Expert'
            }
        ],
        interest_in_coding: true
    };
};

myProfile();
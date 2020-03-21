const usernameCheck = username => (/[a-z]{5,7}/g).test(username);

const passwordCheck = password => (/[a-zA-Z0-9@]{9}/g).test(password);

usernameCheck('diandra');
usernameCheck('ebi');

passwordCheck('Kint4m@ni');
passwordCheck('p@ssW0rd!');
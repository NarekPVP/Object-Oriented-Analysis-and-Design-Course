let customer = {
    'address1': 'Armenia',
    'address2': 'Yerevan',
    'address3': 'Azatutyan str.',
};

let fa = "";
for (let i = 1; i < 4; ++i) {
    fa += customer[`address${i}`] + " ";
}

console.log(fa);



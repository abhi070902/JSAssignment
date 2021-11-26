
let person = [
    {
        'firstName': 'Abhishek',
        'lastName': 'Singh',
        'Office-Address': 'Gorakhpur'
    },
    {
        'firstName': 'Shubham',
        'lastName': 'Singh',
        'Office-Address': 'New-York'
    },
    {
        'firstName': 'Mohit',
        'lastName': 'Agrawal',
        'Office-Address': 'Canada'
    }
]
for(let i=0;i<person.length;i++){
    let val=person[i];
    console.log(i+1);
for (let key in val) {
    console.log("|-"+key + " " + val[key]);
}

}

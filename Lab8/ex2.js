age_count = 1; 
my_age = 21;
while(age_count < my_age){
    if(age_count >= my_age/2) {
        console.log("Don't ask me how old I am!");
        process.exit();
    } 
    else{
    console.log(`age ${age_count}`);}
    age_count++;
}
console.log(`Micah is ${age_count} years old!`)
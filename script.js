function intro(){
    let name =prompt('Enter your name');
    let age =prompt('Enter your Age');
    let intro =name+age;
    console.log(intro)
    if(age >=18){
        document.getElementById("greet").innerHTML = "WELCOME" +name+ "You are eligible to Enroll."
    }
    else{
        document.getElementById("greet").innerHTML = "SORRY!" +name+ "You are too young to Enroll."
    }
    }
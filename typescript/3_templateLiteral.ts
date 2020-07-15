(function(){ 

    function getAge(){
        return age + 100;   
    }

    const firstName = 'John';
    const lastName = 'Doe';
    const age = 33;

    //const output = firstName + " " + lastName + " (" + age + ").";^

    const output = `${firstName} \n${lastName} \n${getAge()}`; // template literales

    console.log(output);

})();

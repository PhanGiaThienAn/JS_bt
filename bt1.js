function grade(score, name){
    var string_grade;
    if(score >= 0 && score <= 100){
        if(score > 90){
            string_grade = 'Excellence';
        } else if(score > 80){
            string_grade = 'Very Good';
        } else if(score > 60){
            string_grade = 'Fair';
        }else if(score >= 50){
            string_grade ='Medium';
        }else{
            string_grade = 'Fail';
        }
    }
    else{
        string_grade ='Score must be between 0 and 100';
    }
    document.getElementById("str_grade").innerHTML = name+ "'s grade is <b>"+string_grade+'</b>';
}
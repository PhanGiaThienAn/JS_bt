function result(semester_1,semester_2,Year,summerise){
    var result = 0;
    var str_result= '';
    if(semester_1 !='' && semester_2 !=''){
        semester_1 = Number(semester_1)
        semester_2 = Number(semester_2)
        if( semester_1 >= 0 && semester_1 <= 10 && semester_2 >= 0 && semester_2 <= 10){
             if(Year == 1){
                result = (semester_1+(semester_2 * 2))/3
             }else if(Year == 2){
                result = (semester_1+(semester_2 * 3))/4
             }else if(Year == 3){
                result = (semester_1+(semester_2 * 4))/5
             }
             document.getElementById("summerise").value = result
        if(result > 9){
            str_result = 'GIOI'
        }else if(result > 7){
            str_result = 'KHA'
        }else if(result >= 4){
            str_result = 'TRUNG BINH'
        }else{
            str_result = 'YEU'
        }
        document.getElementById("result").innerHTML = str_result;
        document.getElementById("result").style.color = "red";
        }else{
            alert("diem cua ban chi tu 0 -> 10")
        }
    }else{
        alert("Vui long nhap diem")
    }
}
function cancel() {
   document.getElementById("semester_1").value = '';
   document.getElementById("semester_2").value = '';
   document.getElementById("Year").value = 1;
   document.getElementById("summerise").value = '';
   document.getElementById("result").innerHTML = '';
}
var student_array =[];
var displaystudentarray=[];
function  submit(){
 for(var j=1;j<=4;j++)
 {
     var name_of_the_student=document.getElementById("name_of_student_"+j)
     .value;
     console.log(name_of_the_student);
     student_array.push(name_of_the_student);

    
 } 
console.log(student_array);
var length_of_student_array=student_array.length;
console.log(length_of_student_array);
for( var k=0;k<length_of_student_array;k++)
{
displaystudentarray.push("name "+student_array[k]);
console.log(displaystudentarray); 
}
console.log(displaystudentarray);
document.getElementById("display_name_with_commas").innerHTML=displaystudentarray;
var removecommas=displaystudentarray.join(" ");
console.log(removecommas);
document.getElementById("display_name_without_commas").innerHTML=removecommas;






    
document.getElementById("buttonsubmit").style.display="none";
document.getElementById("buttonsort").style.display="inline-block";

}
function sorting(){

student_array.sort();

console.log(student_array);
var arraysorting=[];
var length_of_student_array=student_array.length;
console.log(length_of_student_array);

for(var k=0;k<length_of_student_array;k++)
{
    arraysorting.push("name- "+student_array[k]);
    console.log(arraysorting);
    
}
var removecommas=arraysorting.join(" ");
console.log(removecommas);
document.getElementById("display_name_without_commas").innerHTML=removecommas;















}


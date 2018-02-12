function calculateCurrentGrade(){
    var hp=document.getElementById("HomeworkGrades").value;
    var qp=document.getElementById("QuizGrades").value;
    var tp=document.getElementById("TestGrades").value;
    var mp=document.getElementById("MidtermGrade").value;
    var hw=document.getElementById("HomeworkWeight").value;
    var qw=document.getElementById("QuizWeight").value;
    var tw=document.getElementById("TestWeight").value;
    var mw=document.getElementById("MidtermWeight").value;

    var hn=convertArrayStringToNumber(hp);
    var qn=convertArrayStringToNumber(qp);
    var tn=convertArrayStringToNumber(tp);
    var mn=convertArrayStringToNumber(mp);

    var ha=averageArray(hn);
    var qa=averageArray(qn);
    var ta=averageArray(tn);
    var ma=averageArray(mn);

    validate(ha);
    validate(qa);
    validate(ta);
    validate(ma);

    colorRows(ha,document.getElementById("Homework"));
    colorRows(qa,document.getElementById("Quizzes"));
    colorRows(ta,document.getElementById("Tests"));
    colorRows(ma,document.getElementById("Midterm"));

    var total=parseInt(hw)+parseInt(qw)+parseInt(tw)+parseInt(mw);
    var ht=(hw/total)*ha;
    var qt=(qw/total)*qa;
    var tt=(tw/total)*ta;
    var mt=(mw/total)*ma;

    var grade=ht+qt+tt+mt;
    document.getElementById("output").innerHTML = grade+"%";
}
function convertArrayStringToNumber(x){
    var arr=x.split(",");
    for (var i=0;i<arr.length;i++){
        arr[i]=parseInt(arr[i]);
    }
    return arr;
}
function averageArray(z){
    var sum=0;
    for(var i=0;i<z.length;i++){
        sum+=z[i];
    }
    return sum/z.length;
}
function calculateGradeNeeded(){
    var cg=document.getElementById("CurrentGrade").value;
    var fw=document.getElementById("FinalWeight").value;
    var gd=document.getElementById("GradeDesired").value;
    var dw=fw/100;
    var gn=((gd-((1-dw)*cg))/fw)*100;
    document.getElementById("output2").innerHTML = gn+"%";
}
function clearOne(){
    document.getElementById("HomeworkGrades").value="";
    document.getElementById("QuizGrades").value="";
    document.getElementById("TestGrades").value="";
    document.getElementById("MidtermGrade").value="";
    document.getElementById("output").innerHTML ="";
    document.getElementById("HomeworkWeight").value="";
    document.getElementById("QuizWeight").value="";
    document.getElementById("TestWeight").value="";
    document.getElementById("MidtermWeight").value="";
    document.getElementById("output3").innerHTML="";
}
function clearTwo(){
    document.getElementById("CurrentGrade").value="";
    document.getElementById("FinalWeight").value="";
    document.getElementById("GradeDesired").value="";
    document.getElementById("output2").innerHTML = "";
}
function colorRows(score,element){
    if(score<60){
        element.style.background="red";
    }else if(score<70){
        element.style.background="orange";
    }else if(score<80){
        element.style.background="yellow";
    }else if(score<90){
        element.style.background="green";
    }else{
        element.style.background="blue";
    }
}
function validate(grade){
    var warning="Whoops! Is one of your inputs too high?";
    if(grade>100){
        document.getElementById("output3").innerHTML = warning;
    }
}
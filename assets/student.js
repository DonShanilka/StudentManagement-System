import StudentModel from "./StudentModel.js";
import { students } from "./db.js"; // import student array

// var students = [];
var recordIndex;

$('#student-section').css({
    display:'none'
});

$('#course-section').css({
    display: 'none'
});

$('#nav-student').on('click',()=>{
    $('#student-section').css({
        display:'block'
    });
    $('#course-section').css({
        display: 'none'
    });
});

$('#nav-course').on('click',()=>{
    $('#course-section').css({
        display: 'block'
    });
    $('#student-section').css({
        display:'none'
    });
});

//Submit Button Action
$('#student-submit').on('click',()=>{
    var stuid = $('#stu-id').val();
    var stuFirst = $('#first').val();
    var stuLast = $('#last').val();
    var stuAddress = $('#address').val();
    var program = $('#Program').val();

    let student = new StudentModel(stuid,stuFirst,stuLast,stuAddress,program); // studentModel eka index ekata plug karala thiyenawa
    
    students.push(student);

    // Radio Button
    var program = $('input[name="flexRadioDefault"]:checked').val();

    console.log("ID :"+ stuid);
    console.log("First Name :"+ stuFirst);
    console.log("Last Name :"+ stuLast);
    console.log("Address :"+ stuAddress);
    console.log("Program :"+ program);

    var record = `<tr>
        <th scope="row" class="stu-id">${stuid}</th>
        <td class="stu-first-name">${stuFirst}</td>
        <td class="stu-last-name">${stuLast}</td>
        <td class="stu-address">${stuAddress}</td>
        <td class="stu-program">${program}</td>
    </tr>`;
    $('#student-table').append(record);

});

$("#student-table").on('click','tr',function(){
    let id = $(this).find(".stu-id").text();
    let fname = $(this).find(".stu-first-name").text();
    let lname = $(this).find(".stu-last-name").text();
    let address = $(this).find(".stu-address").text();
    let course = $(this).find(".flexRadioDefault1").text();

    $("#stu-id").val(id);
    $("#first").val(fname);
    $("#last").val(lname);
    $("#address").val(address);
    $(`input[name="exampleRadio"][value=${course}]`).prop('checked').true;
});

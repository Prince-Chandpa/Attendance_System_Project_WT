const statusRef = document.getElementsByClassName("status");
const DisplayPresentRef = document.getElementById("DisplayPresent");
const DisplayAbsentRef = document.getElementById("DisplayAbsent");


function isPresentkey(index, e) {
    if (e.key === 'ArrowRight') {
        isPresent(index);
    }
    else if (e.key === 'ArrowLeft') {
        isAbsent(index);
    }
}

function isPresent(index) {
    student[index].status = 'Present';
    statusRef[index].innerHTML = student[index].status;

    statusRef[index].classList.add('text-bg-success');
    statusRef[index].classList.remove('text-bg-danger');
    updateCount();
}

function isAbsent(index) {
    student[index].status = 'Absent';
    statusRef[index].innerHTML = student[index].status;

    statusRef[index].classList.remove('text-bg-success');
    statusRef[index].classList.add('text-bg-danger');
    updateCount();
}

function updateCount() {
    DisplayPresentRef.innerHTML = student.filter(stu => stu.status === 'Present').length;
    DisplayAbsentRef.innerHTML = student.filter(stu => stu.status === 'Absent').length;
}

function presentAll() {
    for (let i = 0; i < student.length; i++) {
        student[i].status = 'Present';
        statusRef[i].innerHTML = student[i].status;
        statusRef[i].classList.remove('text-bg-danger');
        statusRef[i].classList.add('text-bg-success');
    }
    updateCount();
}

function absentAll() {
    for (let i = 0; i < student.length; i++) {
        student[i].status = 'Absent';
        statusRef[i].innerHTML = student[i].status;
        statusRef[i].classList.remove('text-bg-success');
        statusRef[i].classList.add('text-bg-danger');
    }
    updateCount();
}
function resetAll() {
    Swal.fire({
        title: 'Are you sure?',
        text: 'You want to reset Attendance!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, reset it!'
    }).then((result) => {
        if (result.isConfirmed) {
            for (let i = 0; i < student.length; i++) {
                student[i].status = "";
                statusRef[i].innerHTML = "";
                statusRef[i].classList.remove('text-bg-success');
                statusRef[i].classList.remove('text-bg-danger');
            }
            updateCount();
            Swal.fire({
                title: 'Reset!',
                text: 'You Reset Attendance',
                icon: 'success'
            });
        }
    });
}

function submitAttendance() {
    // Create List here because each time create new List if list create at Global old values also remain.
    let absentStudentList = [];

    Swal.fire({
        title: 'Submit Attendance ?',
        text: 'Are you sure you want to Submit Attendance?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes, submit!',
        cancelButtonText: 'No, wait'
    }).then((result) => {
        if (result.isConfirmed) {
            for (let i = 0; i < student.length; i++) {
                if (student[i].status === 'Absent') {
                    absentStudentList.push(student[i].rollno);
                }
            }

            if (absentStudentList.length === 0) {
                Swal.fire({
                    title: 'All Present !',
                    text: 'Every one is Present :)',
                    icon: 'success'
                });
            } else {
                Swal.fire({
                    title: 'Absent Students',
                    html: '<strong>Roll Numbers:</strong><br>' + absentStudentList.join(', '),
                    icon: 'info'
                });
            }
            for (let i = 0; i < student.length; i++) {
                student[i].status = "";
                statusRef[i].innerHTML = "";
                statusRef[i].classList.remove('text-bg-success');
                statusRef[i].classList.remove('text-bg-danger');
            }
        }

    });
}
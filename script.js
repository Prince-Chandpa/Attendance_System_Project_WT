const statusRef = document.getElementsByClassName("status");
        const DisplayPresentRef = document.getElementById("DisplayPresent");
        const DisplayAbsentRef = document.getElementById("DisplayAbsent");

        

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
            let userWant = confirm("Are you sure you want to reset all statuses?");

            if (userWant) {
                for (let i = 0; i < student.length; i++) {
                    student[i].status = "";
                    statusRef[i].innerHTML = "";
                    statusRef[i].classList.remove('text-bg-success');
                    statusRef[i].classList.remove('text-bg-danger');
                }
                updateCount();
            }
        }
        function submitAttendance() {
            // Create List here because each time create new List if list create at Global old values also remain.
            let absentStudentList = [];

            let userWantSubmit = confirm("Are you sure you want to reset all statuses?");
            if (userWantSubmit) {
               for(let i=0; i<student.length; i++){
                if(student[i].status === 'Absent'){
                    absentStudentList.push(student[i].rollno);
                }
               }
            }

            if(absentStudentList.length === 0){
                alert('All Student Are Present :)');
            }else{
                alert('Absent Roll Numbers: \n'+absentStudentList.join(','));
            }
        }
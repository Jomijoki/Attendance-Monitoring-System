// Function to open the modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
  }
  
  // Function to close the modal
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
  }
  
  // Close modal when clicking outside of the modal content
  window.onclick = function (event) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  };

    // Close modal on Esc key press
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    document.querySelectorAll(".modal").forEach((modal) => {
      modal.style.display = "none";
    });
  }
});

function openStudentModal(student) {
  const modalContent = `
    <div class="modal-content">
      <span class="close" onclick="closeModal('studentModal')">&times;</span>
      <h2>Student Information</h2>
      <div class="info">
        <img src="${student.picture}" alt="Student Picture" class="profile-pic">
        <p><strong>Name:</strong> ${student.name}</p>
        <p><strong>Student Number:</strong> ${student.number}</p>
        <p><strong>Course:</strong> ${student.course}</p>
        <p><strong>Section:</strong> ${student.section}</p>
        <p><strong>School Year:</strong> ${student.schoolYear}</p>
      </div>
    </div>`;
  document.getElementById("studentModal").innerHTML = modalContent;
  document.getElementById("studentModal").style.display = "block";
}

function openProfessorModal(professor) {
  const modalContent = `
    <div class="modal-content">
      <span class="close" onclick="closeModal('professorModal')">&times;</span>
      <h2>Student Information</h2>
      <div class="info">
        <img src="${professor.picture}" alt="Student Picture" class="profile-pic">
        <p><strong>Name:</strong> ${professor.name}</p>
        <p><strong>Teaching Course:</strong> ${professor.teachingCourse}</p>
      </div>
    </div>`;
  document.getElementById("professorModal").innerHTML = modalContent;
  document.getElementById("professorModal").style.display = "block";
}
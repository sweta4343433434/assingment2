function editField(fieldId) {
    document.getElementById(fieldId).removeAttribute('readonly');
    document.getElementById(fieldId).focus();
}

function saveProfile() {
    // Add functionality to save profile information
    alert('Profile saved successfully!');
}

function cancelEdit() {
    // Add functionality to cancel the edit
    alert('Edit canceled');
}
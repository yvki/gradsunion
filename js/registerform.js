// check password has at least 8 characters, 1 small letter, 1 big letter, 1 number 
function checkPassword(str) {
    var re = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
    return re.test(str);
}
// check username filled in 
function checkForm(form) {
    if (form.username.value == "") {
        alert("Error: Username cannot be blank!");
        form.username.focus();
        return false;
    }
    re = /^\w+$/;
    if (!re.test(form.username.value)) {
        alert("Error: Username must contain only letters, numbers and underscores!");
        form.username.focus();
        return false;
    }
    // check whether the two passwords match 
    if (form.pwd1.value != "" && form.pwd1.value == form.pwd2.value) {
        if (!checkPassword(form.pwd1.value)) {
            alert("The password you have entered is not valid!");
            form.pwd1.focus();
            return false;
        }
    // check whether the password repeat is filled in 
    } else {
        alert("Error: Please check that you've entered and confirmed your password!");
        form.pwd1.focus();
        return false;
    }
    return true;
}
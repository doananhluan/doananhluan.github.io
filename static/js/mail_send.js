function send_mail() {
    var name = jQuery("#name").val();
    var email = jQuery("#email").val();
    var subject = jQuery("#subject").val();
    var message = jQuery("#message").val();
    var receiver = jQuery("#mail_to").val();
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var flag = 0;
    if (name == "") {
        jQuery("#name").addClass('invalid');
        jQuery("#val_user_name").html("Your Name is Required");
        flag = 1;
    } else {
        jQuery("#name").removeClass('invalid');
        jQuery("#val_user_name").html("");
    }

    if (email == "") {
        jQuery("#email").addClass('invalid');
        jQuery("#val_user_email").html("Please Enter Email");
        flag = 1;
    } else if (!email.match(mailformat)) {
        jQuery("#email").addClass('invalid');
        jQuery("#val_user_email").html("Please Enter Valid Email");
        flag = 2;
    } else {
        jQuery("#email").removeClass('invalid');
        jQuery("#val_user_email").html("");
    }

    if (subject == "") {
        jQuery("#mail_to").addClass('invalid');
        jQuery("#val_mail_to").html("Subject is Required");
        flag = 1;
    } else {
        jQuery("#mail_to").removeClass('invalid');
        jQuery("#val_mail_to").html("");
    }



    if (subject == "") {
        jQuery("#subject").addClass('invalid');
        jQuery("#val_subject").html("Subject is Required");
        flag = 1;
    } else {
        jQuery("#subject").removeClass('invalid');
        jQuery("#val_subject").html("");
    }

    if (message == "") {
        jQuery("#message").addClass('invalid');
        jQuery("#val_message").html("Please Describe your thoughts");
        flag = 1;
    } else {
        jQuery("#message").removeClass('invalid');
        jQuery("#val_message").html("");
    }

    if (flag == 1) {
        setTimeout(() => { alert("Please enter full information.") }, 500)
    } else {
        if (flag == 2) {
            setTimeout(() => { alert("Please enter correct email format.") }, 500)
        } else {

            // checkBtn.addEventListener("click", e => { //t???m b???
            //preventing button from it's default behaviour
            //adding space after each character of user entered values because I've added spaces while generating captcha
            //if captcha matched

            Email.send({
                Host: "smtp.gmail.com",
                Username: "kay.mailserver@gmail.com",
                Password: "occignczmssovelf",
                To: receiver,
                From: email,
                Subject: subject,
                Body: message,
            })
            setTimeout(() => { alert("Email Sent successfully") }, 500)


        }
    }
}
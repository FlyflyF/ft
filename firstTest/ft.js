//用户名innerText
function checkUsername() {
    var usernameIpt = window.document.getElementById("username");
    var username = usernameIpt.value;
    username = myTrim(username);
    usernameIpt.value = username;
    var usernameSpan = window.document.getElementById("usernameSpan");
    if (username == "") {
        //alert("用户名必填。");
        usernameSpan.innerText = "用户名必填。";
        return false;
    }

    var usernameRegex = /^[a-zA-Z_]\w{5,15}$/;
    if (!usernameRegex.test(username)) {
        //alert("用户名必须为6~16个单词字符，不能以数字开头。");
        usernameSpan.innerText = "6~16位，不能以数字开头。";
        return false;
    } else {
        usernameSpan.innerText = "OK";
        return true;
    }
}
//去除用户名前后空格
function myTrim(s) {
    var start = 0;
    var end = s.length - 1;
    while (start <= end && s.charAt(start) == " ") {
        start++;
    }
    while (start <= end && s.charAt(end) == " ") {
        end--;
    }
    return s.substring(start, end + 1);
}


//密码innerText
function checkPassword() {
    var password = window.document.getElementById("password").value;
    var passwordSpan = window.document.getElementById("passwordSpan");
    if (password == null) {
        //alert("密码必填。");
        passwordSpan.innerText = "密码必填。";
        return false;
    }
    var passwordRegex = /\w{6,16}/;
    if (!passwordRegex.test(password)) {
        //alert("密码必须为6~16个单词字符。");
        passwordSpan.innerText = "6~16位单词字符。";
        return false;
    }
    return true;
}


//确认密码innerText
function checkEnsurePassword() {
    var password = window.document.getElementById("password").value;
    var ensurePassword = window.document.getElementById("ensurePassword").value;
    var ensurePasswordSpan = window.document.getElementById("ensurePasswordSpan");
    if (ensurePassword != password) {
        //alert("密码不一致。");
        ensurePasswordSpan.innerText = "密码不一致。";
        return false;
    }
    if (ensurePassword == password || ensurePassword == "") {
        ensurePasswordSpan.innerText = "";
    }
    return true;
}


//邮箱innerText
function checkEmail() {
    var email = window.document.getElementById("email").value;
    var emailSpan = window.document.getElementById("emailSpan");
    if (email == "") {
        // alert("邮箱必填。");
        emailSpan.innerText = "邮箱必填。";
        return false;
    }
    var emailRegex = /\w+@\w+(\.+\w+)+/;
    if (!emailRegex.test(email)) {
        //alert("邮箱不合法。");
        emailSpan.innerText = "邮箱不合法。";
        return false;
    } else {
        emailSpan.innerText = "";
        return true;
    }
}


// //性别innerText
// function checkGender() {
//     var genderArr = window.document.getElementsByName("gender");
//     //var genderSpan = window.document.getElementById("genderSpan");
//     if (genderArr[0].checked == genderArr[1].chencked) {
//         alert("性别必选");
//         //genderSpan.innerText = "性别必选";
//         return false;
//     }
//     return true;
// }


//爱好innerText
function checkHobby() {
    var hobbyArr = window.document.getElementsByName("hobby");
    // var hobbySpan = window.document.getElementById("hobbySpan");
    var flag = false;
    for (var i = 0; i < hobbyArr.length; i++) {
        if (hobbyArr[i].checked) {
            flag = true;
            break;
        }
    }
    if (!flag) {
        alert("爱好不能为空。");
        // hobbySpan.innerText = "爱好不能为空。";
        return false;
    }
    return true;
}


//城市innerText
function checkCity() {
    var city = window.document.getElementById("city").value;
    if (city == "") {
        alert("城市必选。");
        return false;
    }
    return true;
}


//自我介绍innerText
function checkMyInfo() {
    var myInfo = window.document.getElementById("myInfo").value;
    if (myInfo == "" || myInfo == "请输入：") {
        alert("自我介绍不能为空。");
        return false;
    }
    return true;
}

function check() {

    // return checkUsername() && checkPassword() && checkEnsurePassword() &&
    //     checkEmail() && checkGender() && checkHobby() && checkCity() &&
    //     checkMyInfo();

    return checkUsername() && checkPassword() && checkEnsurePassword() &&
        checkEmail() && checkHobby() && checkCity() && checkMyInfo();

    // //用户名
    // var username = window.document.getElementById("username").value;
    // if (username == "") {
    //     alert("用户名必填。");
    //     return false;
    // }

    // var usernameRegex = /[a-zA-Z_]\w{5,15}/;
    // if (!usernameRegex.test(username)) {
    //     alert("用户名必须为6~16个单词字符，不能以数字开头。");
    //     return false;
    // }

    // //密码
    // var password = window.document.getElementById("password").value;
    // if (password == null) {
    //     alert("密码必填。");
    //     return false;
    // }
    // var passwordRegex = /\w{6,16}/;
    // if (!passwordRegex.test(password)) {
    //     alert("密码必须为6~16个单词字符。");
    //     return false;
    // }

    // //确认密码
    // var ensurepassword = window.document.getElementById("ensurepassword").value;
    // if (ensurepassword != password) {
    //     alert("密码不一致。");
    //     return false;
    // }

    // //邮箱
    // var email = window.document.getElementById(email).value;
    // if (email = "") {
    //     alert("邮箱必填。");
    // }

    // var emailRegex = /\w+@\w+(\.+\w+)+/;
    // if (!emailRegex.test(email)) {
    //     alert("邮箱不合法。");
    //     return false;
    // }

    // //性别
    // var genderArr = window.document.getElementsByName(gender);
    // if (genderArr[0].checked == genderArr[1].chencked) {
    //     alert("性别必选");
    //     return false;
    // }

    // //爱好
    // var hobbyArr = window.document.getElementsByName(hobby);
    // var falg = false;
    // for (var i = 0; i < hobbyArr.length; i++) {
    //     if (hobbyArr[i].checked) {
    //         flag = true;
    //         break;
    //     }
    // }
    // if (!flag) {
    //     alert("爱好不能为空。")
    //     return false;
    // }

    // //城市
    // var city = window.document.getElementById("city").value;
    // if (city == "") {
    //     alert("城市必选。");
    //     return false;
    // }

    // //自我介绍
    // var myInfo = window.document.getElementById("myInfo").value;
    // if (myInfo == "" || myInfo == "请输入：") {
    //     alert("自我介绍不能为空。");
    //     return false;
    // }

    // return true;
}
// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(userPassword) {
  let countPassword = userPassword.length;

  if (countPassword < 6) {
    return "Weak";
  } else if (countPassword >= 6 && countPassword <= 10) {
    return "Medium";
  } else {
    return "Strong";
  }
}

console.log(checkPasswordStrength("ssswnalWadqQ"));

console.log(checkPasswordStrength("TechUp"));

console.log(checkPasswordStrength("abcde"));

let dbUsers = [
{
  username : "ali",
  password : "123",
  name : "aliuddin",
  email : "ali@utem.edu.my"
},
{
  username : "fikri",
  password : "456",
  name : "fikriasri",
  email : "fikri@utem.edu.my"
},
{
  username : "jonah",
  password : "789",
  name : "jonahjonathan",
  email : "jonah@utem.edu.my"
}
]

function login(username, password) {
  console.log("Someone tried to login with", username, password)
  let matched = dbUsers.find(element =>
    element.username == username
  )
  if(matched){
    if(matched.password == password){
      return matched
    } else {
      return "Password not matched"
    }
  } else {
    return "Username not found"
  }
}

//try login
console.log(login("jonah", "789"))

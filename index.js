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

function register(newusername, newpassword, newname, newemail) {
  // TODO: Check if username exist
  console.log("Registering...")
  let matched2 = dbUsers.find(element =>
    element.username == newusername
  )
  if(matched2){ 
      console.log("Username has been taken")
      return
   }
  

  dbUsers.push({
    username: newusername,
    password: newpassword,
    name: newname,
    email: newemail
  })
  console.log("Successfully registered!")
}

//try login
console.log(login("utem", "123456"))

//try to reister
register("utem", "123456", "fkekk", "fkekk@utem.edu.my")
register("utem", "123456", "fkekk", "fkekk@utem.edu.my")

console.log(login("utem", "123456"))


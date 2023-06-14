document.getElementById(`form`).addEventListener(`submit`,async function(event){
    event.preventDefault();
    let firstName = document.getElementById(`first-name`).value;
    let lastName = document.getElementById(`last-name`).value;
    let ages = document.getElementById(`age`).value;

    let data={
        firstName:firstName,
        lastName:lastName,
        age:ages
    };
    console.log({data});

   let result=await fetch(`https://dummyjson.com/users/add`,{
        method:`POST`,
        headers:{
            'Content-Type': 'application/json'
        },
body:JSON.stringify(data)

    })
.then(response=>response.json())
.then(response=>response)
.catch(error=>error.message)
console.log({result})

let success= document.getElementById(`success`)
result.id ? success.innerHTML = `User added successfully` : success.innerHTML=`User not added`
success.style.fontSize=`25px`
success.style.fontWeight=`700`
})
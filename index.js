// Add your code here
function submitData(currentName, currentEmail) {
    const dataBody = {name: currentName, email: currentEmail}
    const userInfo = {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(dataBody),
    }
 return fetch("http://localhost:3000/users", userInfo)
    .then ((response) => response.json()
    )
    .then((userInfo) => appendData(userInfo.id)
    )
    .catch((errorObject) => appendData(errorObject.message))

}

function appendData(messageString){
   const header = document.createElement("h1")
   header.innerHTML = messageString
   document.body.appendChild(header)
}






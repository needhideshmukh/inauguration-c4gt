document.getElementById("eventCreateButton").onclick = function () {
  const eventName = document.getElementById("eventName").value
  const guestCount = document.getElementById("guestCount").value
  const guestEmail = document.getElementById("guestEmail").value
  const adminHash = document.getElementById("adminHash").value

  // Create JavaScript object with dynamic form values
  const formData = {
    email: guestEmail,
    identifier: eventName,
    document_hash: adminHash,
    guestCount: guestCount,
  }

  // Convert JavaScript object to JSON
  const jsonData = JSON.stringify(formData)

  // Now you can use `jsonData` for whatever purpose you need
  console.log(jsonData)

  fetch("https://api.demo.dhiway.com/api/v1/dmp/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
      return response.json()
    })
    .then((data) => {
      console.log("Success:", data)
      // Handle success response here
    })
    .catch((error) => {
      console.error("Error:", error)
      // Handle error here
    })
}

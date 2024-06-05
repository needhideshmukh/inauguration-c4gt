// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Ensure Browserify has loaded the modules
  const submitIdentifier = window.submitIdentifier
  const eventManager = window.eventManager

  // Get references to the input field and buttons
  const logButton = document.getElementById("logButton")
  const messageInput = document.getElementById("messageInput")
  const guestCount = document.getElementById("guestCount")
  const guestEmail = document.getElementById("guestEmail")

  // Add a click event listener to the log button
  logButton.addEventListener("click", () => {
    const identifier = messageInput.value
    const guestCount = guestCount.value
    const guestEmail = guestEmail.value
    submitIdentifier(identifier)
  })
})

import './assets/styles/style.css'
import { string } from 'yup'

const emailButton = document.getElementById("email-button")
const emailInput = document.getElementById("email-input")
const emailErrorIcon = document.getElementById("email-error-icon")
const emailErrorMessage = document.getElementById("email-error-message")

let emailIsValid: boolean = true

/**
 * Handle the verification of the email provided by the user.
 * 
 * @param event {Event} - The event
 */
async function handleEmail(event: any) {
    event.preventDefault()
    const testedEmail: string = emailInput?.value
    let schema = string().required().email()
    if (await schema.isValid(testedEmail)) {
        if (!emailIsValid) {
            emailInput?.classList.remove("border-soft-red", "border-2")
            emailInput?.classList.add("border-desaturated-red", "border")
            emailErrorIcon.style.display = ""
            emailErrorMessage.style.display = ""
            emailIsValid = true
        }
    } else {
        if (emailIsValid) {
            emailInput?.classList.add("border-soft-red", "border-2")
            emailInput?.classList.remove("border-desaturated-red", "border")
            emailErrorIcon.style.display = "block"
            emailErrorMessage.style.display = "block"
            emailIsValid = false
        }
    }
}

emailButton?.addEventListener("click", handleEmail)
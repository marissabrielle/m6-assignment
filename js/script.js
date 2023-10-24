// GLOBAL VARIABLES
let id              // THE ID TEXT BOX
let employeeName    // THE NAME TEXT BOX
let ext             // THE EXT TEXT BOX
let email           // THE EMAIL BUTTON
let department      // THE DEPARTMENT SELECTOR
let submit          // THE SUBMIT BUTTON

// HELPER FUNCTION TO RETURN DOM ELEMENT
const $ = (empForm) => document.getElementById(empForm)

document.addEventListener("submit", (e) => {
    // stop the default bevavior of the browser redirecting to a different page
    e.preventDefault()

    // console.log('Test that form has been submitted')

    // get values user entered in text boxes
    // id               = document.getElementById('id').value
    id                  = $('id').value
    employeeName        = $('employeeName').value
    ext                 = $('ext').value
    email               = $('email').value
    department          = $('department').value
    submit              = $('submit').value

    if (id == '' || employeeName == '' || ext == '' || email == '') {
        alert('All fields are required')
        return
    }

    if (id.length != 8) {
        alert(`ID must be 8 numbers`)
        return
    }

    if (ext.length != 4) {
        alert(`Ext must be 4 numbers`)
        return
    }
    
    console.log(`ID: ${id}`)
    console.log(`Name: ${employeeName}`)
    console.log(`Extension: ${ext}`)
    console.log(`Email: ${email}`)
    console.log(`Deparment: ${department}`)
})
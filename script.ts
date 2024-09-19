// listing element
document.getElementById('resumeform')?.addEventListener('submit', function(event) {
    event.preventDefault();
    // type assertion
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const addressElement = document.getElementById('address') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLSelectElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;


    // condition

    if (profilePictureInput && nameElement && emailElement && addressElement && phoneElement && educationElement && experienceElement && skillsElement) {

        const name = nameElement.value;
        const email = emailElement.value; 
        const phone = phoneElement.value;
        const address = addressElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;  

// picture element

const profilePictureFile = profilePictureInput.files?.[0]
const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";


    // resume output
    // personal information
    const resumeOutput = `
    <h2>Resume</h2>
    ${profilePictureURL ? `<img src="${profilePictureURL}"  alt="profile picture" class=profilePicture>`: ""}
    <p><strong>Name:</strong> ${name} </p>
    <p><strong>Email:</strong> ${email} </p>
    <p><strong>Phone:</strong> ${phone} </p>
    <p><strong>Address:</strong> ${address} </p>


    <h3>Education:</h3>
    <p>${education}</p>

    <h3>Experience:</h3>
    <p>${experience}</p>

    <h3>Skills:</h3>
    <p>${skills}</p>
    `;
   
    const resumeOutputElement = document.getElementById('resumeOutput')

    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput
    }

    else {
        console.error('the resume output elements is missing')    
    }
} 
   else {
    console.error('one or more output element are missing')
   }
 

});
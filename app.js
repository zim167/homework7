console.log('Hello World!');

let hasDownloadedResume = false

document.querySelector(".btn.btn-info").addEventListener("click", downloadAlertPause);


function downloadAlertPause() {
    setTimeout(downloadAlert, 2000);
}
function downloadAlert() {
    if (hasDownloadedResume == false)
    {
        
        alert("Your resume is downloaded successfully!");
    }
    hasDownloadedResume = true;

}



function showGreeting(giveName)
{
    const now = new Date();

    const hour = now.getHours();

    let timeGreet;
    if (hour < 12)
    {
        timeGreet = "Morning";
    }
    else if ( hour < 17)
    {
        timeGreet = "Afternoon";
    }
    else{
        timeGreet = "Evening";
    }
    document.getElementById("greeting").textContent =
      "Good " + timeGreet + " , my name is " + giveName + "! Welcome to my portfolio!";
}

function daysUntilDeadline(DLdate ) {
    let start = new Date();
    let end = new Date(DLdate);
    let timeDiff = end - start;
    let daysLeft = timeDiff / (1000 * 3600 *24);
    let daysLeftReal = Math.floor(daysLeft)
    document.getElementById("deadline").textContent = 
    "Days till due date: " + daysLeftReal;
}

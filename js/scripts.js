function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function openMail(){
    window.open("mailto:xyz@abc.com");
}

function sendEmail(){
    event.preventDefault();
    let xhr = new XMLHttpRequest();
    let url = 'https://iifainwr5h.execute-api.us-east-1.amazonaws.com/default/sendEmail';
    xhr.open('POST', url, true);

    xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 ) {
            if ( xhr.status == 200 || xhr.status == 201 ) { // Ok or Created
                // let data = JSON.parse(xhr.responseText);
                // console.log(data);
                document.emailForm.reset();
                document.getElementById("messageSentBanner").classList.remove("hideMessageSentBanner");
                setTimeout(function(){
                    document.getElementById("messageSentBanner").classList.add("hideMessageSentBanner");
                }, 3000); //run this after 3 seconds
            }
            else {
                console.error("POST request failed.");
                console.error(xhr.status + ': ' + xhr.responseText);
            }
        }
    };

    // JavaScript data (object)
    let userObject = {
        name: document.emailForm.senderName.value,
        email: document.emailForm.senderEmail.value,
        message: document.emailForm.senderMessage.value
    };

    let userObjectJson = JSON.stringify(userObject); // Convert JS object to JSON string

    // Pass JSON as request body
    xhr.send(userObjectJson);
}
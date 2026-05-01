// Declare a global variable and shadow it inside a function using both var and let to see how they behave differently when printed

const browserVersion="Chrome";

function getBrowserVersion(){
    if (browserVersion=="chrome"){
        //var browserVersion;   // Output undefined
        let browserVersion;   // Output Chrome
    }
    console.log(browserVersion);
}

getBrowserVersion();
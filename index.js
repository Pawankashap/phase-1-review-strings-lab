// Write your code in this file!


const currentUser = 'Grace Hopper';
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
const shortGreeting=`Welcome, ${currentUser.slice(0, 1)}!`;

function catname(cname) {
    if(cname === 'Daisy') {
        return `Hi welcome ${cname}¡`
    }
    else {
        return `Hi ${cname}¡`
    }
}

function petname(pname){
    return pname==="Jony"?`Hi, Welcome Jony `: `Welcome ${pname}`
}
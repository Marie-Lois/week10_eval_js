
function displayDateTime() {
    const now = new Date();

    const options = { weekday: 'short', month: 'long', day: 'numeric' };
    const fullDate = now.toLocaleDateString('en-US', options);
    const time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false });

    console.log(`${fullDate} ${time}`);
}

displayDateTime();
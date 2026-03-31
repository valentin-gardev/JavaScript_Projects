async function userNames() {
    // New parm that takes usernames and converts them to strings
    const parmsText = await $('#login_credentials').getText();
    // New arr that splits and removes the first item
    const parmsArr = parmsText.split('\n').slice(1);

    const userNames = {};
    // Add usernames and passwords into obj
    for(const user of parmsArr) {
        userNames[user] = 'secret_sauce';
    };
    return userNames
};

module.exports = userNames;
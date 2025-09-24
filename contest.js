//users dictionary
//key is whatever name they want to show in the contest
//value is their kattis username or kattis email (either works)
let users = {};
//users['Desired Name To Show In Contest'] = "Kattis username or email"
//for example
//users['Zach'] = 'fake@email.com'
//kattis will warn you if they can't find the username/email

async function run(users){   /* run from devtools snipped with ctrl-enter  OR NOW    urlbar   javascript:<paste> */
    let i = 0;
    for(const nickName in users){
        /*put teamName in element ID add-team-name */
        team(nickName);
        /*click add team button */
        buttonTeam();

        /*await means the rest of my code stops until wow gives me back a promise */

        /* In wow, loop until team-member-username class length property is greater than i */
        /*call await new promise timeout 10 <--- meaning let other js code run for 10ms */

        await wow(users[nickName], i);

        /*We only need 1 await in this function*/

        /*click add to team*/
        buttonMember(i);
        /*click team done*/
        buttonDone(i);
        i++;
    }
}

async function wow(name, i){
    var x = document.getElementsByClassName("team-member-username");
    while(x == null || x.length <= i){
        await new Promise(r => setTimeout(r, 10));
        x = document.getElementsByClassName("team-member-username");
    }
    document.getElementsByClassName("team-member-username")[i].value = name;
    return Promise.resolve(1);
}

function buttonTeam(){
    document.getElementById("add-team-btn").click();
}
function team(name){
    document.getElementById("add-team-name").value = name;
}

function teamMember(name, i){
    document.getElementsByClassName("team-member-username")[i].value = name;
}

function buttonMember(i){
    var but = document.getElementsByClassName("team-member-add")[i*2+1];
    but.disabled = false;
    but.click();
}

function buttonDone(i){
    var but = document.getElementsByClassName("team-done");
    but[i].click();
}

run(users);

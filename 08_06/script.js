/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

// function insertTitle (stringTitle) {
//     const title = document.createElement("h1");

//     title.innerHTML = `
//         <h1>${stringTitle}</h1>
//     `
//     return title;
// }

// document.querySelector("main").append(insertTitle("I am a title"));

// const insertTitle = function (stringTitle) {
//     const title = document.createElement("h1");

//     title.innerHTML = `
//         <h1>${stringTitle}</h1>
//     `
//     return title;
// }

// document.querySelector("main").append(insertTitle("I am a title"));

const insertTitle = (stringTitle) => {
    const title = document.createElement("h1");

    title.innerHTML = `
        <h1>${stringTitle}</h1>
    `
    return title;
}

document.querySelector("main").append(insertTitle("I am a title"));
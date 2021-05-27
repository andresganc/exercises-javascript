
// Get element By ID
const ById = document.getElementById('id-p')
console.log(ById)

// Get element By Class
const ByClass = document.getElementsByClassName('class-p')
console.log(ByClass)

// Get element By Name
const ByName = document.getElementsByName('name-p')
console.log(ByName)

// Get element By Tag Name
const TagName = document.getElementsByTagName('p')
console.log(TagName)

// Tour all elements p and get date 
for(elemet in TagName) {
    console.log(elemet)
}

// Tour all elements p and get content 
for(elemet of TagName) {
    console.log(elemet)
}


//document.getElementsByTagNameNS('Names')
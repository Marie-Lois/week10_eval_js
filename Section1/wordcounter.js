let text = `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard’s job is to vex chumps quickly in fog. Watch "Jeopardy!", Alex Trebek's fun TV quiz game. Woven silk pyjamas exchanged for blue quartz. Brawny gods just`
function countCharacters(text){
    let count = 0
    for(let i = 0; i < text.length; i++){
        count++
    }
    console.log(count)
}


function countWords(text){
    let counts = 0
    let texts = text.split(" ")
    // for(let i = 0; i < text.length; i++){
    //     if (text[i] != " ") {
    //         counts++
    //     }
    // }
    console.log(texts.length) 
}

function countSpaces(text){
    let counts = 0
    for(let i = 0; i < text.length; i++){
        if (text[i] == " "){
            counts++
        }
    }
    console.log(counts)
}

function wordCount(text) {
    const words = text.split(" ")
    return words.reduce((wordCounts, i) => {
        wordCounts[i] = (wordCounts[i] || 0) + 1
        console.log(wordCounts) 
    }, {}) 
}
    


//countCharacters(text)
//countSpaces(text)
//countWords(text)
wordCount(text)

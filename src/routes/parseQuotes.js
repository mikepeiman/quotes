import getAuthor from './getAuthor.js'
let callCount = 0
export const parse = (workingQuoteObject) => {
    console.log(`🚀 ~ file: parseQuotes.js ~ line 4 ~ parse ~ workingQuoteObject`, workingQuoteObject)
    // let { originalText, nextPart } = workingQuoteObject
    // console.log(`🚀 ~ file: parseQuotes.js ~ line 3 ~ parse ~ originalText`, originalText)
    if (!workingQuoteObject['quoteBody']) {
        // console.log(`🚀 ~ file: parseQuotes.js ~ line 8 ~ parse ~ need quoteBody`)

        workingQuoteObject = getQuoteBody(workingQuoteObject)
    }
    if (!workingQuoteObject['author']['name']) {
        // console.log(`🚀 ~ file: parseQuotes.js ~ line 8 ~ parse ~ need author`)
        workingQuoteObject = getAuthor(workingQuoteObject)
    }

    if (!workingQuoteObject['parsingComplete']) {  /*? nextPart */
        // console.log(`🚀 ~ file: parseQuotes.js ~ line 13 ~ parse ~ !workingQuoteObject['parsingComplete']`, workingQuoteObject['parsingComplete'])
        workingQuoteObject = parseNextDetail(workingQuoteObject)
        parse(workingQuoteObject)
    }
    // console.log(`🚀 ~ file: parse.js ~ line 14 ~ parse ~ workingQuoteObject`, workingQuoteObject)
    /*?  workingQuoteObject */
    return workingQuoteObject
}

function getQuoteBody(workingQuoteObject) {
    let { originalText, remainingText } = workingQuoteObject
    let text, splitText, quote, remainder, authorSplit
    text = workingQuoteObject['quoteBody'] = originalText
    splitText = text.split(`"`)
    quote = splitText[1]
    splitText
    remainder = splitText[2]
    let len = text.length;
    let char = `-`

    // if(remainder.includes("-")){
    //     authorSplit = remainder.split("-")
    //     authorSplit.length
    //     remainder = authorSplit[1]
    // }
    let authorStart = remainder.indexOf("-")
    authorStart = authorStart > -1 ? authorStart : 0;
    remainder = Array.from(remainder)
        .splice(authorStart, len)
        .join(String())
        .trim();
    quote
    remainder
    workingQuoteObject['remainingText'] = remainder
    workingQuoteObject['quoteBody'] = quote;
    return workingQuoteObject;
}

function parseNextDetail(workingQuoteObject) {
    console.log(`🚀 ~ file: parseQuotes.js ~ line 106 ~ parseNextDetail ~ workingQuoteObject`, workingQuoteObject)
    let { remainingText, nextPart } = workingQuoteObject
    if (!remainingText) {
        workingQuoteObject['parsingComplete'] = true
        console.log(`🚀 ~ file: parseQuotes.js ~ line 110 ~ parseNextDetail ~ workingQuoteObject['parsingComplete'] = true`, true)
        return workingQuoteObject
    }
    // console.log(`🚀 ~ file: parse.js ~ line 61 ~ parseNextDetail ~ remainingText`, remainingText)
    let separatorValue = findNextSeparatingCharacter(remainingText);
    nextPart = nameNextPartOfQuote(remainingText, separatorValue)
    console.log(`🚀 ~ file: parseQuotes.js ~ line 97 ~ parseNextDetail ~ remainingText`, remainingText)
    console.log(`🚀 ~ file: parseQuotes.js ~ line 97 ~ parseNextDetail ~ separatorValue`, separatorValue)
    console.log(`🚀 ~ file: parseQuotes.js ~ line 99 ~ parseNextDetail ~ nextPart`, nextPart)

    workingQuoteObject = parseNextPartOfQuote(workingQuoteObject, nextPart, separatorValue)
    // workingQuoteObject['parsingComplete'] = true
    return workingQuoteObject
}

function parseQuoteAuthorTitle(workingQuoteObject, separatorValue) {
    callCount++
    // console.log(`🚀 ~ file: parseQuotes.js ~ line 127 ~ parseQuoteAuthorTitle ~ callCount`, callCount)
    // console.log(`🚀 ~ file: parseQuotes.js ~ line 126 ~ parseQuoteAuthorTitle ~ parseQuoteAuthorTitle`, )
    let title, text, nextPart
    text = workingQuoteObject['remainingText'].trim();
    // let splitText = text.split(",")
    let splitText = text.split(/,(.+)/)
    if (splitText.length > 1) {
        title = splitText[1].trim()
        workingQuoteObject['author']['title'] = title
    }
    // console.log(`🚀 ~ file: parseQuotes.js ~ line 86 ~ parseQuoteAuthorTitle ~ title`, title)
    // console.log(`🚀 ~ file: parseQuotes.js ~ line 129 ~ parseQuoteAuthorTitle ~ splitText`, splitText)
    let textEnd = text.length;
    text = Array.from(text).splice(separatorValue + 1, textEnd).join(String())
    // console.log(`🚀 ~ file: parseQuotes.js ~ line 140 ~ parseQuoteAuthorTitle ~ text`, text)
    separatorValue = findNextSeparatingCharacter(text);
    // console.log(`🚀 ~ file: parseQuotes.js ~ line 93 ~ parseQuoteAuthorTitle ~ separatorValue`, separatorValue)
    nextPart = nameNextPartOfQuote(text, separatorValue)
    workingQuoteObject['nextPart'] = nextPart
    // console.log(`🚀 ~ file: parseQuotes.js ~ line 95 ~ parseQuoteAuthorTitle ~ nextPart`, nextPart)
    nextPart === "axiom" && splitText !== "axiom" ? workingQuoteObject['parsingComplete'] = true : workingQuoteObject['parsingComplete'] = false
    if (nextPart && !workingQuoteObject['parsingComplete']) {
        title = Array.from(text).splice(1, separatorValue - 1).join(String()).trim();
        workingQuoteObject['remainingText'] = text = Array.from(text).splice(separatorValue, textEnd).join(String());
    } else {
        title = text
        text = false
    }
    // console.log(`🚀 ~ file: parseQuotes.js ~ line 100 ~ parseQuoteAuthorTitle ~ title`, title)
    // console.log(`🚀 ~ file: parseQuotes.js ~ line 103 ~ parseQuoteAuthorTitle ~ workingQuoteObject.authorTitle`, workingQuoteObject.authorTitle)
    workingQuoteObject['author']['title'] = [...workingQuoteObject.authorTitle, title]
    console.log(`🚀 ~ file: parseQuotes.js ~ line 109 ~ parseQuoteAuthorTitle ~ workingQuoteObject['author']['title'].length`, workingQuoteObject['author']['title'].length)
    console.log(`🚀 ~ file: parseQuotes.js ~ line 109 ~ parseQuoteAuthorTitle ~ workingQuoteObject['author']['title']`, workingQuoteObject['author']['title'])
    workingQuoteObject['author']['title'] = title
    if (Array.isArray(workingQuoteObject['author']['title'])) {
        let str = workingQuoteObject['author']['title'].join(',').trim()
        console.log(`🚀 ~ file: parseQuotes.js ~ line 113 ~ parseQuoteAuthorTitle ~ str`, str)
        workingQuoteObject['author']['title'] = str
    }
    // workingQuoteObject.authorTitle[0].length < 1 ? workingQuoteObject.authorTitle = false : true
    // workingQuoteObject.title[0].length < 1 ? workingQuoteObject.title = false : true
    // workingQuoteObject['author']['title'].push(title.trim())
    // workingQuoteObject.details?.push({ 'type': 'Author title', 'value': title })
    workingQuoteObject['remainingText'] = text;
    // workingQuoteObject['parsingComplete'] = true
    // console.log(`🚀 ~ file: parseQuotes.svelte ~ line 281 ~ parseQuoteAuthorTitle ~ workingQuoteObject\n\n`, workingQuoteObject, `\n\n`)
    // console.log(`🚀 ~ file: parseQuotes.js ~ line 130 ~ parseQuoteAuthorTitle ~ title split `, title)
    return workingQuoteObject;
}
function parseQuoteAxiom(workingQuoteObject, separatorValue) {
    let title, text, nextPart
    text = workingQuoteObject['remainingText'].trim();
    let textEnd = text.length;
    text = Array.from(text).splice(separatorValue + 1, textEnd).join(String())
    console.log(`🚀 ~ file: parseQuotes.js ~ line 165 ~ parseQuoteAxiom ~ text`, text)
    separatorValue = findNextSeparatingCharacter(text);
    nextPart = nameNextPartOfQuote(text, separatorValue)
    workingQuoteObject['nextPart'] = nextPart
    if (nextPart) {
        title = Array.from(text).splice(1, separatorValue - 1).join(String()).trim();
        text = Array.from(text).splice(separatorValue, textEnd).join(String());
    } else {
        title = text
        text = false
    }
    workingQuoteObject['author']['title'] = title.trim();
    workingQuoteObject.details.push({ 'type': 'Author title', 'value': title })
    workingQuoteObject['remainingText'] = text;
    return workingQuoteObject;
}
function parseQuoteDate(workingQuoteObject, separatorValue) {
    let { remainingText } = workingQuoteObject
    remainingText.trim()
    let textEnd = remainingText.length;
    let date = Array.from(remainingText).splice(separatorValue + 1, textEnd - separatorValue - 2).join(String());
    let test = hasNumber(date)
    console.log(`🚀 ~ file: parseQuotes.js ~ line 146 ~ parseQuoteDate ~ test`, test)
    test ? workingQuoteObject['date'] = date : workingQuoteObject['context'] = date
    let remainderStart = textEnd - date.length
    console.log(`🚀 ~ file: parse.js ~ line 193 ~ parseQuoteDate ~ date`, date)
    remainingText = Array.from(remainingText).splice(separatorValue, textEnd).join(String());
    console.log(`🚀 ~ file: parse.js ~ line 195 ~ parseQuoteDate ~ remainingText`, remainingText)
    workingQuoteObject['parsingComplete'] = true
    return workingQuoteObject;
}

function hasNumber(myString) {
    return /\d/.test(myString);
}
function parseQuoteSource(workingQuoteObject, separatorValue) {
    let { remainingText } = workingQuoteObject
    let text = workingQuoteObject['remainingText'].trim();
    console.log(`🚀 ~ file: parseQuotes.js ~ line 197 ~ parseQuoteSource ~ text`, text)
    let len = text.length;
    separatorValue = findNextSeparatingCharacter(text);
    let start = separatorValue + 1
    let end = getClosingCharacterValue(text, ']') - start;
    let source = Array.from(text)
        .splice(start, end)
        .join(String())
        .trim();
    start = source.length + 2
    console.log(`🚀 ~ file: parseQuotes.js ~ line 204 ~ parseQuoteSource ~ start`, start)
    end = text.length - 1
    console.log(`🚀 ~ file: parseQuotes.js ~ line 206 ~ parseQuoteSource ~ end`, end)
    remainingText = Array.from(text).splice(start, end).join(String()).trim()
    console.log(`🚀 ~ file: parse.js ~ line 284 ~ parseQuoteSource ~ remainingText`, remainingText)
    workingQuoteObject['remainingText'] = remainingText
    workingQuoteObject['source'] = source
    workingQuoteObject?.details?.push({ type: 'source', value: source });
    console.log(`🚀 ~ file: parse.js ~ line 287 ~ parseQuoteSource ~ workingQuoteObject`, workingQuoteObject)
    return workingQuoteObject;
}
function parseQuoteContext(workingQuoteObject, separatorValue) {
    // console.log(`🚀 ~ file: parse.js ~ line 250 ~ parseQuoteContext ~ workingQuoteObject`, workingQuoteObject)
    let { remainingText } = workingQuoteObject
    let text = remainingText.trim();
    console.log(`🚀 ~ file: parseQuotes.js ~ line 222 ~ parseQuoteContext ~ text`, text)
    separatorValue = findNextSeparatingCharacter(text);
    // console.log(`🚀 ~ file: parse.js ~ line 255 ~ parseQuoteContext ~ separatorValue`, separatorValue)
    let start = separatorValue + 2
    let end = getClosingCharacterValue(text, ')');
    let newPart = text.split('(')[1] ? text.split('(')[1] : text
    let context = newPart.split(')')[0] ? newPart.split(')')[0] : newPart
    let remainder = newPart.split(')')[1] ? newPart.split(')')[1].trim() : false
    if (!remainder) {
        workingQuoteObject['parsingComplete'] = true
    }
    workingQuoteObject['remainingText'] = remainder
    workingQuoteObject['context'] = context
    workingQuoteObject?.details?.push({ type: 'context', value: context });
    console.log(`🚀 ~ file: parse.js ~ line 287 ~ parseQuoteContext ~ workingQuoteObject`, workingQuoteObject)
    // workingQuoteObject['nextPart'] = false;
    // workingQuoteObject['remainingText'] = false
    // workingQuoteObject['parsingComplete'] = true
    return workingQuoteObject;
}
function parseQuoteTags(workingQuoteObject, separatorValue) {
    // console.log(`🚀 ~ file: parse.js ~ line 257 ~ parseQuoteTags ~ workingQuoteObject`, workingQuoteObject)
    let { remainingText } = workingQuoteObject
    let text = remainingText.trim();
    console.log(`🚀 ~ file: parseQuotes.js ~ line 246 ~ parseQuoteTags ~ text`, text)
    separatorValue = findNextSeparatingCharacter(text);
    console.log(`🚀 ~ file: parse.js ~ line 255 ~ parseQuoteTags ~ separatorValue`, separatorValue)
    let start = separatorValue + 1
    // let end = text.length - getClosingCharacterValue(text, `#`);
    let end = getNextCharacterValue(text, `#`, start) - 1
    let thisPart
    if (end > -1) {
        thisPart = Array.from(text)
            .splice(start, end)
            .join(String())
            .trim();
    } else {
        thisPart = Array.from(text)
            .splice(start, text.length)
            .join(String())
            .trim();
    }

    start = thisPart.length + 1
    end = text.length - 1
    remainingText = Array.from(text).splice(start, end).join(String()).trim()
    // console.log(`🚀 ~ file: parse.js ~ line 284 ~ parseQuoteTags ~ remainingText`, remainingText)
    workingQuoteObject['remainingText'] = remainingText
    workingQuoteObject['tags']?.push(thisPart)
    // console.log(`🚀 ~ file: parse.js ~ line 297 ~ parseQuoteTags ~ thisPart`, thisPart)
    workingQuoteObject?.details?.push({ type: 'tags', value: thisPart });
    // console.log(`🚀 ~ file: parse.js ~ line 287 ~ parseQuoteTags ~ workingQuoteObject`, workingQuoteObject)
    return workingQuoteObject;
}


function findNextSeparatingCharacter(remainingText) {
    let separators = [
        { "name": "author", "openingChar": "-", "closingChar": "", "value": false },
        { "name": "title", "openingChar": ",", "closingChar": ",", "value": false },
        { "name": "source", "openingChar": "[", "closingChar": "]", "value": false },
        { "name": "axiom", "openingChar": ":", "closingChar": "", "value": false },
        { "name": "year", "openingChar": "(", "closingChar": ")", "value": false },
        { "name": "context", "openingChar": "@", "closingChar": ")", "value": false },
        { "name": "tags", "openingChar": "#", "closingChar": "", "value": false },
    ]
    separators.forEach(separator => {
        separator.value = remainingText.indexOf(separator.openingChar)
    })
    console.log(separators)
    return getMinNotFalse(separators);
}

function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase();
}

function nextInstanceOfChar(text, charIndex) {
    return text.charAt(charIndex + 1)
}

function nameNextPartOfQuote(remainingText, separatorValue) {
    console.log(`🚀 ~ file: parseQuotes.js ~ line 286 ~ nameNextPartOfQuote ~ separatorValue`, separatorValue)
    console.log(`🚀 ~ file: parseQuotes.js ~ line 286 ~ nameNextPartOfQuote ~ remainingText`, remainingText)
    let char = remainingText.charAt(separatorValue);
    // if (char == '(') {
    //     let nextChar = nextInstanceOfChar(remainingText, separatorValue)
    //     if (isLetter(nextChar)) {
    //         return 'authorTitle'
    //     }
    // }
    switch (char) {
        // case '-':
        //     return 'authorName';
        //     break;
        case ',':
            return 'authorTitle';
            break;
        case ':':
            return 'axiom';
            break;
        case '(':
            return 'date';
            break;
        case '[':
            return 'source';
            break;

        case '@':
            return 'context';
            break;

        case '#':
            return 'tags';
            break;

        default:
            return false;
            break;
    }
}

function parseNextPartOfQuote(workingQuoteObject, nextPart, separatorValue) {
    // console.log('\x1b[31m%s\x1b[0m', 'parseQuotes.svelte line:191 nextPart', nextPart);
    switch (nextPart) {
        case 'authorName':
            return getAuthor(workingQuoteObject, separatorValue);
            break;

        case 'authorTitle':
            return parseQuoteAuthorTitle(workingQuoteObject, separatorValue);
            break;

        case 'axiom':
            return parseQuoteAxiom(workingQuoteObject, separatorValue);
            break;

        case 'date':
            return parseQuoteDate(workingQuoteObject, separatorValue);
            break;

        case 'source':
            return parseQuoteSource(workingQuoteObject, separatorValue);
            break;

        case 'context':
            return parseQuoteContext(workingQuoteObject, separatorValue);
            break;

        case 'tags':
            return parseQuoteTags(workingQuoteObject, separatorValue);
            break;

        default:
            workingQuoteObject['parsingComplete'] = true
            break;
    }
    return workingQuoteObject;
}


function getClosingCharacterValue(text, char) {
    let separator = text.indexOf(char);
    return separator;
}

function getNextCharacterValue(text, char, first) {
    let separatorIndex = text.indexOf(char, first + 1)
    return separatorIndex
}

function getMinNotFalse(separators) {
    const charsFound = separators.filter(sep => sep.value > -1)
    if (!charsFound.length) {
        return false
    }
    const minSeparator = charsFound.reduce((min, item) => { return min > item.value ? item.value : min }, charsFound[0].value)
    return minSeparator;
}

// let workingQuoteObject = {};

let test1 = `""Fortunately, some are born with spiritual immune systems that sooner or later give rejection to the illusory  worldview grafted upon them from birth through social conditioning. They begin sensing that something is amiss, and  start looking for answers. Inner knowledge and anomalous outer experiences show them a side of reality others are  oblivious to, and so begins their journey of awakening. Each step of the journey is made by following the heart  instead of following the crowd and by choosing knowledge over the veils of ignorance." - Henri Bergson"`;
let test2 = `"XML is like violence: If it isn’t working, you aren’t using enough of it." - unknown, #humor #software-development #coding`
let test3 = `"Isn't it true that all miracles originate in the human heart?" - Michael Peiman @(Or perhaps they
    originate in God, and are birthed through the human heart) #insight #spirituality #God`
let test4 = `"Do you have the courage to bring forth this work? The treasures that are hidden inside you are hoping that
    you'll say yes." - Jack Gilbert @(What do you want to do with your life?)`
let test5 = `"The medical profession is being bought by the pharmaceutical industry, not only in terms of the practice of
medicine, but also in terms of teaching and research. The academic institutions of this country are allowing
themselves to be the paid agents of the pharmaceutical industry. I think it’s disgraceful." - Arnold Seymour Relman,
Harvard professor, former Editor-In-Chief of the NEJM (New England Journal of Medicine) #pharma #medical-industry #corruption #science`
let test6 = `"Journalists cannot serve two masters. To the extent that they take on the task of suppressing information or
biting their tongue for the sake of some political agenda, they are betraying the trust of the public and corrupting
their own profession." Thomas Sowell`
let test7 = `"I must judge for myself, but how can I judge, how can any man judge, unless his mind has been opened and
enlarged by reading." - John Adams`
let test8 = `"Most people would rather live a comfortable lie than the possibility of an uncomfortable truth." -
Wilhelmus Peiman (2019-09-27)`
let test9 = `"The only way to eat an elephant is one bite at a time." - anonymous`
let test10 = `"Antifa: because nothing says &ldquo;I hate fascism&rdquo; like attacking anyone who has an independent
thought." -
@yeebingeebin [YouTube]`
// workingQuoteObject['originalText'] = workingQuoteObject['remainingText'] = test10

// workingQuoteObject['originalText'] = workingQuoteObject['remainingText'] = test5
// let result = parse(workingQuoteObject)
// result

// let testArray = [test1, test2, test3, test4, test5, test6]
// let processedArray = []
// for(let i = 0; i < testArray.length; i++){
//     let cleaned = removeExtraQuoteMarks(testArray[i])
//     cleaned
// //    processedArray = [...processedArray, parse(testArray[i])]
// }
// let result = parse(workingQuoteObject)
// processedArray

// function removeExtraQuoteMarks(quote){
//     return quote.split(`""`)
// }
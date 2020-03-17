// basic content morphemes //
var basicNoun = ['thing', 'time', 'woman', 'man', 'brother', 'sister', 'mother', 'child', 'sky', 'tree', 'love', 'animal', 'cat', 'bird', 'song', 'home', 'heart', 'head', 'hand', 'friend', 'son', 'daughter', 'fork', 'pain', 'meat', 'book', 'paper', 'fate', 'hole', 'sock', 'hair', 'bed', 'window', 'door', 'dog', 'sun', 'moon', 'star', 'moment', 'memory', 'salt', 'water', 'earth', 'air', 'coward', 'garden', 'chocolate', 'spice', 'melody', 'mind', 'language', 'band', 'face', 'phone', 'kitchen', 'stone', 'breath', 'wit', 'husband', 'wife']; // pick 30
var basicVb = ['drink', 'cry', 'eat', 'sleep', 'hold', 'bring', 'go', 'go', 'like', 'like', 'put', 'said', 'see', 'use', 'work', 'say', 'write', 'read', 'talk', 'let', 'walk', 'run', 'stand', 'sing', 'dance', 'help', 'cook', 'climb', 'begin', 'end', 'try', 'take', 'took', 'shit', 'fuck', 'thank', 'feed', 'hurt', 'break', 'wake', 'measure', 'make', 'make', 'meet', 'remember', 'erase', 'draw', 'decorate', 'die', 'bear', 'bore', 'born', 'teach', 'learn', 'part', 'forget', 'get', 'got', 'come', 'came', 'fix', 'bloom', 'taste', 'smell', 'touch', 'feel', 'think', 'laugh', 'hide', 'concentrate', 'prod', 'give', 'fill']; // pick 30
var basicAdj = ['good', 'bad', 'sad', 'happy', 'hot', 'green', 'blue', 'red', 'yellow', 'soft', 'quiet', 'loud', 'still', 'crazy', 'big', 'little', 'best', 'angry', 'tired', 'thin', 'fat', 'false', 'true', 'real', 'dead', 'grey', 'black', 'white', 'old', 'young', 'odd', 'even', 'smooth', 'round', 'hard', 'easy', 'whole', 'light', 'dark', 'close', 'far', 'sweet', 'sour', 'kind', 'bold', 'best', 'straight', 'solid', 'generous', 'gorgeous', 'brilliant', 'deep', 'shallow', 'opaque', 'smart', 'clear', 'quick', 'slow', 'tall', 'short', 'wise', 'strange', 'fortunate', 'fresh', 'empty', 'full']; // pick 30
// fuction morphemes //
var funcArt = ['a', 'a', 'a', 'a', 'an', 'an', 'the', 'the', 'the', 'the']; // pick 10
var funcVb = ['am', 'are', 'are', 'be', 'is', 'is', 'is', 'is', 'is', 'is', 'was', 'were', 'will', 'did', 'do', 'do', 'has', 'has', 'have']; // pick 15
var funcPrep = ['as', 'at', 'away', 'by', 'for', 'for', 'in', 'in', 'of', 'of', 'on', 'out', 'to', 'to', 'to', 'to', 'up', 'with', 'with', 'about', 'above', 'across', 'after', 'against', 'along', 'among', 'around', 'at', 'before', 'behind', 'below', 'beneath', 'beside', 'between', 'beyond', 'but', 'by', 'despite', 'down', 'during', 'except', 'for', 'from', 'in', 'inside', 'like', 'near', 'of', 'off', 'on', 'out', 'over', 'past', 'since', 'through', 'to', 'under', 'until', 'up', 'with', 'with']; // pick 15
var funcConj = ['and', 'and', 'and', 'and', 'but', 'but', 'but', 'or', 'or', 'so', 'so', 'though', 'yet']; // pick 8
var funcOther = ['how', 'if', 'than', 'then', 'when', 'which', 'who', 'here', 'there', 'all', 'none', 'one', 'some', 'any']; // pick 8
var letter = ['d', 'd', 'e', 'e', 'o', 's', 's', 's', 's', 's', 's', 'y', 'y', 'y']; // pick 10
var suffix = ['ed', 'ed', 'ed', 'en', 'en', 'er', 'er', 'es', 'es', 'ing', 'ing', 'ing', 'ing', 'ly', 'ly', 'un']; // pick 10
var funcPron = ['her', 'him', 'she', 'his', 'I', 'I', 'I', 'I', 'it', 'it', 'it', 'it', 'it', 'it', 'me', 'my', 'our', 'their', 'them', 'they', 'that', 'that', 'this', 'this', 'those', 'these', 'we', 'we', 'you', 'you', 'your']; // pick 12
var funcNeg = ['no', 'no', 'not', 'not', 'never']; // pick 4
var funcVbAux = ['can', 'can', 'could', 'would', 'should']; // pick 4
// thematic content morphemes - vocabulary //
var punct = [',', ',', ',', ',', '.', '.', '.', '.', '!', '!', '?', ';', ':', '-', '(', ')', '"', '"'];
var vocabMeta = ['poet', 'write', 'read', 'page', 'ink', 'screen', 'style', 'mind', 'think', 'bleed', 'black', 'white', 'line', 'stanza', 'word', 'order'];
var vocabNature = ['leaf', 'twig', 'clear', 'fog', 'boot', 'hike', 'tranquil', 'breath', 'earth', 'sun', 'squint', 'discover', 'seek', 'spring', 'fall', 'summer', 'winter'];
var vocabQueer = ['pride', 'sex', 'lesbian', 'gay', 'bi', 'sexual', 'trans', 'gender', 'queer', 'rainbow', 'inter', 'non', 'march', 'proud', 'love', 'equal', 'closet', 'self', 'shame', 'queen', 'body', 'kiss', 'skin', 'husband', 'wife', 'name'];
var vocabChildhood = ['play', 'mom', 'dad', 'brother', 'sister', 'sibling', 'happy', 'sad', 'mate', 'friend', 'pony', 'bike', 'lick', 'lollipop', 'young', 'small', 'follow', 'shy', 'know', 'un', 'certain', 'understand', 'back', 'forward', 'question', 'everything', 'love', 'now', 'then', 'past', 'stick', 'believe', 'make', 'bright', 'curious', 'craft', 'crash'];
var vocabSpace = ['dust', 'discover', 'empty', 'everything', 'nothing', 'dark', 'light', 'speed', 'void', 'fathom', 'new', 'world', 'star', 'planet', 'asteroid', 'galaxy', 'comet', 'cosmos', 'nebula', 'measure', 'curious'];
var vocabReligion = ['god', 'heaven', 'hell', 'sin', 'soul', 'preach', 'pray', 'church', 'sanctuary', 'sacred', 'rite', 'grace', 'worship'];
var vocabBredLik = ['Cow', 'wen', 'nite', 'shiny', 'write', 'has', 'gon', 'lik', 'bred', 'my', 'name', 'its', 'and', 'all', 'men', 'bed', 'i', 'stay', 'up', 'late', 'i', 'the', 'Calfe', 'Toung', 'lik', 'cat'];
var vocabPrufrock = ['time', 'peach', 'beach', 'old', 'trousers', 'fog', 'smoke', 'street', 'mutter', 'restless', 'night', 'cheap', 'sawdust', 'hotel', 'tedious', 'argument', 'insidious', 'intent', 'question', 'footman', 'platter', 'matter', 'stair', 'hair'];

// default words, number generated //
var wordArrays = [
    [basicNoun, 20],
    [basicAdj, 15],
    [basicVb, 20],
    [funcArt, 10],
    [funcVb, 15],
    [funcVbAux, 4],
    [funcPron, 12],
    [funcPrep, 15],
    [funcNeg, 4],
    [funcConj, 8],
    [funcOther, 8],
    [letter, 10],
    [suffix, 10]
];
// optional theme words in arrays, themeID //
var themeArrays = [
    [punct, 'punctuation'],
    [vocabReligion, 'religion'],
    [vocabSpace, 'space'],
    [vocabChildhood, 'childhood'],
    [vocabQueer, 'queer'],
    [vocabNature, 'nature'],
    [vocabMeta, 'meta'],
    [vocabPrufrock, 'prufrock'],
    [vocabBredLik, 'tumblr'],
];

// set min-width when page refreshes based on window size

// on page refresh - main script function //
$(document).ready(function () {
    // generate random words in each basic category from array //
    var width = $('#container').width() / 2; // half parent element width
    var height = $('#container').height(); // parent element height
    for (var i = 0; i < wordArrays.length; i++) { // for the number of arrays
        for (var j = 0; j < wordArrays[i][1]; j++) { // for the specified number of desired words in the given array
            var wordCat = wordArrays[i][0];
            var r = Math.floor(Math.random() * wordCat.length); // randomly select any index within the array
            var left = Math.floor(Math.random() * (width - 30));
            var top = Math.floor(Math.random() * (height - 40)); // randomly position element without x/y overflow
            $('<div class="word ui-draggable">' + wordCat[r] + '</div>').appendTo("#container").css({
                left: left,
                top: top
            });
        }
    }

    // generate theme menu from array //
    for (var i = 0; i < themeArrays.length; i++) { // for the total number of arrays
        var themeID = themeArrays[i][1];
        $('<li class="menuItem"><input type="checkbox" id="' + themeID + '" name="' + themeID + '" value="' + themeID + '" onchange="testTheme(this,' + i + ')"><label for="' + themeID + '"> ' + themeID + '</label></li>').appendTo("#menuOptions");
    }
});

// make word elements draggable //
$(function () {
    $(".word").draggable({
        containment: "parent",
        cursor: "crosshair",
        stack: ".word", // refresh top z-index when word clicked
        grid: [5, 10],
        snap: true,
        snapTolerance: 5
    });
    // generate theme menu from array //
    for (var i = 0; i < themeArrays.length; i++) { // for the total number of arrays
        var themeID = themeArrays[i][1];
        $('<li class="menuItem"><input type="checkbox" id="' + themeID + '" name="' + themeID + '" value="' + themeID + '" onchange="testTheme(this,' + i + ')"><label for="' + themeID + '"> ' + themeID + '</label></li>').appendTo("#menuOptions");
    }
});

// draggable grid options //
var grid = $(".word").draggable("option", "grid");
var snap = $(".word").draggable("option", "snap");
var snapTolerance = $(".selector").draggable("option", "snapTolerance");
// turn grid off //
function snapOff() {
    $(".word").draggable({
        grid: false,
        snap: false
    });
    $("#snapOff").addClass('selected');
    $("#snapOn").removeClass('selected');
}
// turn grid on //
function snapOn() {
    $(".word").draggable("option", {
        grid: [5, 10],
        snap: true,
    });
    $("#snapOn").addClass('selected');
    $("#snapOff").removeClass('selected');
}

// hide/show theme menu sidebar //
function toggleThemes() {
    $('menu').toggleClass('menuHide');
    $('#toggleThemes').toggleClass('selected');
}

// test whether the theme input element has been checked or unchecked, and send to addWords or deleteWords accordingly! 
function testTheme(themeID, themeIndex) {
    if (themeID.checked) {
        addWordsByTheme(themeIndex);
    } else {
        deleteWordsByTheme(themeIndex);
    }
}

// generate word elements from checked theme //
function addWordsByTheme(themeIndex) {
    var theme = themeArrays[themeIndex][0]; // identify the theme in question based on its index within themeArrays
    var themeID = themeArrays[themeIndex][1];
    var width = $('#container').width() / 2;
    var height = $('#container').height();
    for (var i = 0; i < theme.length; i++) { // for the total number of words in the given array
        var left = Math.floor(Math.random() * (width - 70));
        var top = Math.floor(Math.random() * (height - 40));
        $('<div class="word ui-draggable ' + themeID + '">' + theme[i] + '</div>').appendTo("#container").css({
            left: left,
            top: top,
        });
    }
    $(".word").draggable({ // make the new words draggable
        containment: "parent",
        stack: ".word",
        snapTolerance: 5
    });
    snapOn();
}

// delete word elements from unchecked theme //
function deleteWordsByTheme(themeIndex) {
    var targetTheme = themeArrays[themeIndex][1];
    $('.' + targetTheme).remove();
}

/************************* THE REVOLUTION *************************/

// revolutionary phases
var revPhase1 = [
    ['I\'m with', 'her', 'her'],
    ['fight like', 'a girl', 'fight'],
];
var revPhase2 = [
    ['pussy', 'grabs back', 'pussy'],
    ['nevertheless she', 'persisted', 'persist'],
];
var revPhase3 = [
    ['women\'s rights are', 'human rights', 'human'],
    ['glass ceilings are', 'meant to be broken', 'ceiling'],
];
var revPhase4 = [
    ['girls just wanna have', 'fundamental human rights', 'fun'],
    ['pizza rolls not', 'gender roles', 'roles'],
    ['women deserve more freedoms than', 'guns', 'freedom'],
];
var revPhase5 = [
    ['smash', 'the patriarchy', 'smash'],
    ['a woman\'s place is', 'in the revolution', 'place'],
    ['feminists are not', 'feminazis', 'fem'],
];

// array of revolutionary phases
var revPhaseArray = [
    revPhase1, revPhase2, revPhase3, revPhase4, revPhase5
];

function startTheRevolution() {
    $(".word").css("display", "none");
    $("#toggleThemes, #snapOn, #snapOff").css("display", "none");
    $("menu").addClass("menuHide");
    $("#revolutionary").addClass('selected');
    $("#liberal").removeClass('selected');
    
    // new sequential revolution //
    var continueRevolution;
    checkRevolution(addWordsByPhase(revPhase1)); // phase 1
    // if checkRevolution = true, enter phase 2
}
function addWordsByPhase(revPhaseN) {
    var width = $('#container').width();
    var height = $('#container').height();
    for (var i = 0; i < revPhaseN.length; i++) {
        var left = Math.floor(Math.random() * (width - 70));
        var top = Math.floor(Math.random() * (height - 40));
        $('<div class="revolutionary word ui-draggable ' + revPhaseN[i][2] + ' part1" id="' + revPhaseN[i][2] + '">' + revPhaseN[i][0] + '</div>').appendTo("#container").css({
            left: left,
            top: top
        });
        left = Math.floor(Math.random() * (width - 70));
        top = Math.floor(Math.random() * (height - 40));
        $('<div class="revolutionary word ui-draggable ' + revPhaseN[i][2] + ' part2" id="' + revPhaseN[i][2] + '">' + revPhaseN[i][1] + '</div>').appendTo("#container").css({
            left: left,
            top: top
        });
        // this ends up with only one pair changing color "fight like a girl"
        var revPhraseClass = "." + revPhaseN[i][2];
        $(revPhraseClass).draggable({ // make new words draggable
            containment: "parent",
            stack: ".revolutionary",
            snap: ".revolutionary",
            snapMode: "outside",
            snapTolerance: 20
        });
        $(revPhraseClass).droppable({ // make new words droppable within their own phrase
            accept: revPhraseClass,
            tolerance: "touch",
            over: function () {
                // revPhraseClass = "." + revPhaseN[i][2];
                // ID obv changed
                var revPhraseID = "." + $(this).attr('id');
                $(revPhraseID).css("background-color", "pink");
                checkRevolution(true);
            },
            out: function () {
                // revPhraseClass = "." + revPhaseN[i][2];
                var revPhraseID = "." + $(this).attr('id');
                $(revPhraseID).css("background-color", "rgb(243, 243, 243)");
                checkRevolution(false);
            }
        });
    }
}
function checkRevolution(progress) {
    // if all clear, revolution enters next phase
}

// return to basic 'liberal' mode //
function endTheRevolution() {
    $(".revolutionary").remove();
    $(".word").css("display", "inline");
    $("#toggleThemes, #snapOn, #snapOff").css("display", "inline");
    $("#liberal").addClass('selected');
    $("#revolutionary").removeClass('selected');
}

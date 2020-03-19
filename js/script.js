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
var vocabMeta = ['poet', 'write', 'read', 'page', 'ink', 'screen', 'style', 'mind', 'think', 'bleed', 'black', 'white', 'line', 'stanza', 'word', 'order', 'rhapsody'];
var vocabNature = ['leaf', 'twig', 'clear', 'fog', 'boot', 'hike', 'tranquil', 'breath', 'earth', 'sun', 'squint', 'discover', 'seek', 'spring', 'fall', 'summer', 'winter'];
var vocabQueer = ['pride', 'sex', 'lesbian', 'gay', 'bi', 'sexual', 'trans', 'gender', 'queer', 'rainbow', 'inter', 'non', 'march', 'proud', 'love', 'equal', 'closet', 'self', 'shame', 'queen', 'body', 'kiss', 'skin', 'husband', 'wife', 'name'];
var vocabChildhood = ['play', 'mom', 'dad', 'brother', 'sister', 'sibling', 'happy', 'sad', 'mate', 'friend', 'pony', 'bike', 'lick', 'lollipop', 'young', 'small', 'follow', 'shy', 'know', 'un', 'certain', 'understand', 'back', 'forward', 'question', 'everything', 'love', 'now', 'then', 'past', 'stick', 'believe', 'make', 'bright', 'curious', 'craft', 'crash'];
var vocabSpace = ['dust', 'discover', 'empty', 'everything', 'nothing', 'dark', 'light', 'speed', 'void', 'fathom', 'new', 'world', 'star', 'planet', 'asteroid', 'galaxy', 'comet', 'cosmos', 'nebula', 'measure', 'curious'];
var vocabReligion = ['god', 'heaven', 'hell', 'sin', 'soul', 'preach', 'pray', 'church', 'sanctuary', 'sacred', 'rite', 'grace', 'worship'];
var vocabBredLik = ['Cow', 'wen', 'nite', 'shiny', 'write', 'has', 'gon', 'lik', 'bred', 'my', 'name', 'its', 'and', 'all', 'men', 'bed', 'i', 'stay', 'up', 'late', 'i', 'the', 'Calfe', 'Toung', 'lik', 'cat'];
var vocabPrufrock = ['time', 'peach', 'beach', 'old', 'trousers', 'fog', 'smoke', 'street', 'mutter', 'restless', 'night', 'cheap', 'sawdust', 'hotel', 'tedious', 'argument', 'insidious', 'intent', 'question', 'footman', 'platter', 'matter', 'stair', 'hair'];
/* var vocabCitlalli = ['frick frack', 'paddy whack', 'biscuit', 'samantha from', 'sammy', 'nard', 'chock a block']; */

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
    // make basic words draggable //
    $(".word").draggable({
        containment: "parent",
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
// set min-width when page refreshes based on window size?

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

// revolutionary phases //
// sentence pt 1, pt 2, class/id name, check value
var revPhase1 = [
    ['I\'m with', 'her', 'her', false],
    ['fight like', 'a girl', 'fight', false],
];
var revPhase2 = [
    ['pussy', 'grabs back', 'pussy', false],
    ['nevertheless she', 'persisted', 'persist', false],
];
var revPhase3 = [
    ['women\'s rights are', 'human rights', 'human', false],
    ['glass ceilings are', 'meant to be broken', 'ceiling', false],
];
var revPhase4 = [
    ['girls just wanna have', 'fundamental human rights', 'fun', false],
    ['pizza rolls not', 'gender roles', 'roles', false],
    ['women deserve more freedoms than', 'guns', 'freedom', false],
];
var revPhase5 = [
    ['smash', 'the patriarchy', 'smash', false],
    ['a woman\'s place is in', 'the revolution', 'place', false],
    ['feminists are not', 'feminazis', 'fem', false],
];

// switch to 'revolutionary' mode //
function startTheRevolution() {
    // simplify the screen setup
    $(".word").css("display", "none");
    $("#toggleThemes, #snapOn, #snapOff").css("display", "none");
    $("menu").addClass("menuHide");
    $("#revolutionary").addClass('selected');
    $("#liberal").removeClass('selected');

    continueRevolution(revPhase1); // begin with phase 1
    // the rest will follow
}

function continueRevolution(nextRevPhase) {
    // PHASE 1 //
    if (nextRevPhase == revPhase1) {
        // ADD WORDS AND MAKE THEM DRAGGABLE
        addWordsByPhase(revPhase1);
        // MAKE ONE SENTENCE DROPPABLE
        $(".her").droppable({ // make new words droppable within their own sentence
            accept: ".her",
            tolerance: "touch",
            over: function () {
                $(".her").css("background-color", "pink");
                revPhase1[0][3] = true;
                checkRevolution(revPhase1, revPhase2);
            },
            out: function () {
                $(".her").css("background-color", "rgb(243, 243, 243)");
                revPhase1[0][3] = false;
            }
        });
        // MAKE ANOTHER SENTENCE DROPPABLE
        $(".fight").droppable({ // make new words droppable within their own sentence
            accept: ".fight",
            tolerance: "touch",
            over: function () {
                $(".fight").css("background-color", "pink");
                revPhase1[1][3] = true;
                checkRevolution(revPhase1, revPhase2);
            },
            out: function () {
                $(".fight").css("background-color", "rgb(243, 243, 243)");
                revPhase1[1][3] = false;
            }
        });
    }
    // PHASE 2
    else if (nextRevPhase == revPhase2) {
        addWordsByPhase(revPhase2);
        $(".pussy").droppable({ // make new words droppable within their own sentence
            accept: ".pussy",
            tolerance: "touch",
            over: function () {
                $(".pussy").css("background-color", "pink");
                revPhase2[0][3] = true;
                checkRevolution(revPhase2, revPhase3);
            },
            out: function () {
                $(".pussy").css("background-color", "rgb(243, 243, 243)");
                revPhase2[0][3] = false;
            }
        });
        $(".persist").droppable({ // make new words droppable within their own sentence
            accept: ".persist",
            tolerance: "touch",
            over: function () {
                $(".persist").css("background-color", "pink");
                revPhase2[1][3] = true;
                checkRevolution(revPhase2, revPhase3);
            },
            out: function () {
                $(".persist").css("background-color", "rgb(243, 243, 243)");
                revPhase2[1][3] = false;
            }
        });
    }
    // PHASE 3
    else if (nextRevPhase == revPhase3) {
        addWordsByPhase(revPhase3);
        $(".human").droppable({ // make new words droppable within their own sentence
            accept: ".human",
            tolerance: "touch",
            over: function () {
                $(".human").css("background-color", "pink");
                revPhase3[0][3] = true;
                checkRevolution(revPhase3, revPhase4);
            },
            out: function () {
                $(".human").css("background-color", "rgb(243, 243, 243)");
                revPhase3[0][3] = false;
            }
        });
        $(".ceiling").droppable({ // make new words droppable within their own sentence
            accept: ".ceiling",
            tolerance: "touch",
            over: function () {
                $(".ceiling").css("background-color", "pink");
                revPhase3[1][3] = true;
                checkRevolution(revPhase3, revPhase4);
            },
            out: function () {
                $(".ceiling").css("background-color", "rgb(243, 243, 243)");
                revPhase3[1][3] = false;
            }
        });
    }
    // PHASE 4
    else if (nextRevPhase == revPhase4) {
        addWordsByPhase(revPhase4);
        $(".fun").droppable({ // make new words droppable within their own sentence
            accept: ".fun",
            tolerance: "touch",
            over: function () {
                $(".fun").css("background-color", "pink");
                revPhase4[0][3] = true;
                checkRevolution(revPhase4, revPhase5);
            },
            out: function () {
                $(".fun").css("background-color", "rgb(243, 243, 243)");
                revPhase4[0][3] = false;
            }
        });
        $(".roles").droppable({ // make new words droppable within their own sentence
            accept: ".roles",
            tolerance: "touch",
            over: function () {
                $(".roles").css("background-color", "pink");
                revPhase4[1][3] = true;
                checkRevolution(revPhase4, revPhase5);
            },
            out: function () {
                $(".roles").css("background-color", "rgb(243, 243, 243)");
                revPhase4[1][3] = false;
            }
        });
        $(".freedom").droppable({ // make new words droppable within their own sentence
            accept: ".freedom",
            tolerance: "touch",
            over: function () {
                $(".freedom").css("background-color", "pink");
                revPhase4[2][3] = true;
                checkRevolution(revPhase4, revPhase5);
            },
            out: function () {
                $(".freedom").css("background-color", "rgb(243, 243, 243)");
                revPhase4[2][3] = false;
            }
        });
    }
    // PHASE 5
    else if (nextRevPhase == revPhase5) {
        addWordsByPhase(revPhase5);
        $(".smash").droppable({ // make new words droppable within their own sentence
            accept: ".smash",
            tolerance: "touch",
            over: function () {
                $(".smash").css("background-color", "pink");
                revPhase5[0][3] = true;
                checkRevolution(revPhase5);
            },
            out: function () {
                $(".smash").css("background-color", "rgb(243, 243, 243)");
                revPhase5[0][3] = false;
            }
        });
        $(".place").droppable({ // make new words droppable within their own sentence
            accept: ".place",
            tolerance: "touch",
            over: function () {
                $(".place").css("background-color", "pink");
                revPhase5[1][3] = true;
                checkRevolution(revPhase5);
            },
            out: function () {
                $(".place").css("background-color", "rgb(243, 243, 243)");
                revPhase5[1][3] = false;
            }
        });
        $(".fem").droppable({ // make new words droppable within their own sentence
            accept: ".fem",
            tolerance: "touch",
            over: function () {
                $(".fem").css("background-color", "pink");
                revPhase5[2][3] = true;
                checkRevolution(revPhase5);
            },
            out: function () {
                $(".fem").css("background-color", "rgb(243, 243, 243)");
                revPhase5[2][3] = false;
            }
        });
    }
    else {
        alert("congratulations, revolutionary. \nyou are ready to take on the patriarchy. welcome to the poetic bloc.");
    }
}
// add draggable words according to the next phase
function addWordsByPhase(revPhaseN) {
    var width = $('#container').width();
    var height = $('#container').height();
    for (var i = 0; i < revPhaseN.length; i++) {
        var left = Math.floor(Math.random() * (width - 270)); // place phrases without falling out of the container
        var top = Math.floor(Math.random() * (height - 40));
        $('<div class="revolutionary word ui-draggable ' + revPhaseN[i][2] + ' part1" id="' + revPhaseN[i][2] + '">' + revPhaseN[i][0] + '</div>').appendTo("#container").css({
            left: left,
            top: top
        });
        left = Math.floor(Math.random() * (width - 200));
        top = Math.floor(Math.random() * (height - 40));
        $('<div class="revolutionary word ui-draggable ' + revPhaseN[i][2] + ' part2" id="' + revPhaseN[i][2] + '">' + revPhaseN[i][1] + '</div>').appendTo("#container").css({
            left: left,
            top: top
        });
        $("." + revPhaseN[i][2]).draggable({ // make new words draggable
            containment: "parent",
            stack: ".revolutionary",
            snap: ".revolutionary",
            snapMode: "outside",
            snapTolerance: 20
        });
    }
}
// check if all the current sentences have been dropped together
function checkRevolution(thisRevPhase, nextRevPhase) {
    for (i = 0; i < thisRevPhase.length; i++) {
        if (thisRevPhase[i][3] == false) {
            return false;
        }
    }
    // if all sentences are dropped, remove their droppability and continue to the next phase
    for (i = 0; i < thisRevPhase.length; i++) {
        $("." + thisRevPhase[i][2]).droppable("destroy");
        thisRevPhase[i][3] = false;
    }
    continueRevolution(nextRevPhase);
}

// return to basic 'liberal' mode //
function endTheRevolution() {
    $(".revolutionary").remove();
    $(".word").css("display", "inline");
    $("#toggleThemes, #snapOn, #snapOff").css("display", "inline");
    $("#liberal").addClass('selected');
    $("#revolutionary").removeClass('selected');
}

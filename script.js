// basic content morphemes //
var basicNoun = ['thing', 'time', 'woman', 'man', 'brother', 'sister', 'mother', 'child', 'sky', 'tree', 'love', 'animal', 'cat', 'bird', 'song', 'home', 'heart', 'head', 'hand', 'friend', 'son', 'daughter', 'fork', 'pain', 'meat', 'book', 'paper', 'fate', 'hole', 'sock', 'hair', 'bed', 'window', 'door', 'dog', 'sun', 'moon', 'star', 'moment', 'memory', 'salt', 'water', 'earth', 'air', 'coward', 'garden', 'chocolate', 'spice', 'melody', 'mind', 'language', 'band', 'face', 'phone', 'kitchen', 'stone', 'breath', 'wit', 'husband', 'wife']; // pick 30
var basicVb = ['drink', 'cry', 'eat', 'sleep', 'hold', 'bring', 'go', 'go', 'like', 'like', 'put', 'said', 'see', 'use', 'work', 'say', 'write', 'read', 'talk', 'let', 'walk', 'run', 'stand', 'sing', 'dance', 'help', 'cook', 'climb', 'begin', 'end', 'try', 'take', 'took', 'shit', 'fuck', 'thank', 'feed', 'hurt', 'break', 'wake', 'measure', 'make', 'make', 'meet', 'remember', 'erase', 'draw', 'decorate', 'die', 'bear', 'bore', 'born', 'teach', 'learn', 'part', 'forget', 'get', 'got', 'come', 'came', 'fix', 'bloom', 'taste', 'smell', 'touch', 'feel', 'think', 'laugh', 'hide', 'concentrate', 'prod','give']; // pick 30
var basicAdj = ['good', 'bad', 'sad', 'happy', 'hot', 'green', 'blue', 'red', 'yellow', 'soft', 'quiet', 'loud', 'still', 'crazy', 'big', 'little', 'best', 'angry', 'tired', 'thin', 'fat', 'false', 'true', 'real', 'dead', 'grey', 'black', 'white', 'old', 'young', 'odd', 'even', 'smooth', 'round', 'hard', 'easy', 'whole', 'light', 'dark', 'close', 'far', 'sweet', 'sour', 'kind', 'bold', 'best', 'straight', 'solid', 'generous', 'gorgeous', 'brilliant', 'deep', 'shallow', 'opaque', 'smart', 'clear', 'quick', 'slow', 'tall', 'short', 'wise', 'strange', 'fortunate', 'fresh']; // pick 30
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
var vocabMeta = ['poet', 'write', 'read', 'page', 'ink', 'screen', 'style', 'mind', 'think', 'bleed', 'black', 'white', 'line', 'stanza', 'word', 'order'];
var vocabNature = ['leaf', 'twig', 'clear', 'fog', 'boot', 'hike', 'tranquil', 'breath', 'earth', 'sun', 'squint', 'discover', 'seek', 'spring', 'fall', 'summer', 'winter'];
var vocabQueer = ['pride', 'sex', 'lesbian', 'gay', 'bi', 'sexual', 'trans', 'gender', 'queer', 'rainbow', 'inter', 'non', 'march', 'proud', 'love', 'equal', 'closet', 'self', 'shame', 'queen', 'body', 'kiss', 'skin', 'husband', 'wife', 'name'];
var vocabChildhood = ['play', 'mom', 'dad', 'brother', 'sister', 'sibling', 'happy', 'sad', 'mate', 'friend', 'pony', 'bike', 'lick', 'lollipop', 'young', 'small', 'follow', 'shy', 'know', 'un', 'certain', 'understand', 'back', 'forward', 'question', 'everything', 'love', 'now', 'then', 'past', 'stick', 'believe', 'make', 'bright', 'curious', 'craft', 'crash'];
var vocabSpace = ['dust', 'discover', 'empty', 'everything', 'nothing', 'dark', 'light', 'speed', 'void', 'fathom', 'new', 'world', 'star', 'planet', 'asteroid', 'galaxy', 'comet', 'cosmos', 'nebula', 'measure', 'curious'];
var vocabReligion = ['god', 'heaven', 'hell', 'sin', 'soul', 'preach', 'pray', 'church', 'sanctuary', 'sacred', 'rite', 'grace', 'worship'];
var vocabBredLik = ['Cow', 'wen', 'nite', 'shiny', 'write', 'has', 'gon', 'lik', 'bred', 'my', 'name', 'its', 'and', 'all', 'men', 'bed', 'i', 'stay', 'up', 'late', 'i', 'the', 'Calfe', 'Toung', 'lik', 'cat'];
var vocabPrufrock = ['time', 'peach', 'beach', 'old', 'trousers', 'fog', 'smoke', 'street', 'mutter', 'restless', 'night', 'cheap', 'sawdust', 'hotel', 'tedious', 'argument', 'insidious', 'intent', 'question','footman','platter','matter','stair','hair'];
/* var vocabTest = ['xxxxxxx','yyyyyyyyy','n00000000']; */

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
// optional theme words, menu/class name //
var themeArrays = [
    [vocabReligion, 'religion'],
    [vocabSpace, 'space'], 
    [vocabChildhood, 'childhood'], 
    [vocabQueer, 'queer'], 
    [vocabNature, 'nature'], 
    [vocabMeta, 'meta'], 
    [vocabPrufrock, 'prufrock'], 
    [vocabBredLik, 'tumblr'],
    /* [vocabTest, 'test'] */
];

$(document).ready(function () {
    var width = $('#container').width(); // parent element width
    var height = $('#container').height(); // parent element height
    // generate random words in each basic category from array //
    for (var i = 0; i < wordArrays.length; i++) { // for the number of arrays
        for (var j = 0; j < wordArrays[i][1]; j++) { // for the specified number of desired words in the given array
            var wordCat = wordArrays[i][0];
            var r = Math.floor(Math.random() * wordCat.length); // randomly select any index within the array
            var left = Math.floor(Math.random() * (width - 70));
            var top = Math.floor(Math.random() * (height - 40)); // randomly position element without x/y overflow
            $('<div class="word ui-draggable">' + wordCat[r] + '</div>').appendTo("#container").css({
                left: left,
                top: top
            });
        }
    }
    // generate theme menu from array //
    for(var i = 0; i < themeArrays.length; i++) { // for the total number of words in the given array
        $('<li class="menuItem" onclick="addWords(themeArrays['+i+'][0],'+i+')"><input type="checkbox" id="' + themeArrays[i][1] + '" name="' + themeArrays[i][1] + '" value="' + themeArrays[i][1] + '"><label for="' + themeArrays[i][1] + '"> ' + themeArrays[i][1] + '</label></li>').appendTo("#menuOptions");
    }
});

// make word elements draggable //
$(function () {
    $(".word").draggable({
        containment: "parent",
        cursor: "crosshair",
        stack: ".word" // refresh top z-index when word clicked
    });
});

// draggable grid options //
var grid = $(".word").draggable("option", "grid");
var snap = $(".word").draggable("option", "snap");
var snapTolerance = $(".selector").draggable("option", "snapTolerance");
// turn grid on //
function snapOn() {
    $(".word").draggable("option", {
        grid: [5, 10],
        snap: true,
        snapTolerance: 5
    });
}
// turn grid off //
function snapOff() {
    $(".word").draggable({
        grid: false,
        snap: false
    });
}

// hide/show theme menu sidebar //
function toggleThemes() {
    $('menu').toggleClass('menuShow');
}

// hide/show theme words when 'update' clicked instead of each menu item individually? //

/* function updateThemes() { // add and delete elements using js
    for(var i = 0; i<themeArrays.length;i++) { // for the number of checkboxes
        // when 'update' clicked, test to see which theme boxes are marked
        // if a theme is marked, and those words aren't already on the page, add those words to the page. otherwise, do nothing. 
        // if a theme is not marked, delete all elements with that class
    }
} */

// generate words from vocab list when menu item is clicked (currently either checking or unchecking box) //
function addWords(theme, n) {
    var width = $('#container').width();
    var height = $('#container').height();
    for (var i = 0; i < theme.length; i++) { // for the total number of words in the given array
        var left = Math.floor(Math.random() * (width - 70));
        var top = Math.floor(Math.random() * (height - 40));
        $('<div class="word ui-draggable ' + themeArrays[n][1] + '">'+theme[i]+'</div>').appendTo("#container").css({
            left: left,
            top: top
        });
    }
    $(function () { // make the new words draggable
        $(".word").draggable({
            containment: "parent",
            cursor: "crosshair",
            stack: ".word"
        });
    });
}

// delete theme words when box unchecked //

// when grid or free-form is 'on' leave that button in 'hover' mode //

// split the screen into two panels? //

// color different theme words? //
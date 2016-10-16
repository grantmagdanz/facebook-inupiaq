var translations = {
    "likes": "aime",
    "shared": "partagé",
    "hrs": "heures",
    "with": "avec",
    "shared a": "partagé une"
}

// This code is mostly pulled from https://9to5google.com/2015/06/14/how-to-make-a-chrome-extensions/
function translate() {
    var elements = document.getElementsByTagName('*');

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                var text = node.nodeValue;
                var replacedText = text;
                for (var word in translations) {
                    if (translations.hasOwnProperty(word)) {
                        replacedText = replacedText.replace(new RegExp("\\b" + word + "\\b", "gi"), translations[word]);
                    }
                }

                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }
}

document.addEventListener( "DOMNodeInserted", translate, false);
translate()


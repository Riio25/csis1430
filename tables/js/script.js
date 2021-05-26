
$(document).ready(function (){
    let anchor = $('a');
    anchor.attr('target', '_blank');

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
          if (request.contentScriptQuery == "queryPrice") {
            var url = "https://www.youtube.com/watch?v=uo35R9zQsAI";
            fetch(url)
                .then(response => response.text())
                .then(text => parsePrice(text))
                .then(price => sendResponse(price))
                .catch(error => 'did not work')
            return true;  
          }
        });
})
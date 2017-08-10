onload = function()
{
    // buttons
    var button_homeOn = document.getElementById('home-on');
    var button_homeOff = document.getElementById('home-off');
    var button_saveToFolderOn = document.getElementById('save-to-folder-on');
    var button_saveToFolderOff = document.getElementById('save-to-folder-off');
    var button_shortenLinkOn = document.getElementById('shorten-link-on');
    var button_shortenLinkOff = document.getElementById('shorten-link-off');

    //home 
    var text_notLoggedIn = document.getElementById('not-logged-in-message');
    var text_noUserAccount = document.getElementById('no-quicklink-user-message');
    var text_usernameInvalid = document.getElementById('username-invalid');
    var button_verifyUsername = document.getElementById('verify-username');
    var input_newUsername = document.getElementById('new-username');

    //shorten link
    var div_shortenLinkContent = document.getElementById('shorten-link-content');
    var button_confirmAndCopy = document.getElementById('confirm-copy');
    var button_generateRandomQuickLink = document.getElementById('random-quick-link');
    var input_quickLinkPath = document.getElementById('quick-link-path-input');

    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) 
    {
        var url = tabs[0].url;
    });

    chrome.identity.getProfileUserInfo(function(userInfo)
    {
        if (userInfo.email == "")
        {

        }
    });


    // default is home
    hideAll();
    showHomePage();

    function show(element)
    {
        element.style.display = 'block';
    }

    function hide(element)
    {
        element.style.display = 'none';
    }

    function generateRandomPath()
    {
        var path = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 7; i++)
            path += possible.charAt(Math.floor(Math.random() * possible.length));

        return path;
    }

    function POST(url, body, callback)
    {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() 
        { 
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            {
                callback(xmlHttp.responseText);
            }
        }
        xmlHttp.open("POST", url, true);
        xmlHttp.setRequestHeader("Content-type", "application/json");
        xmlHttp.setRequestHeader("Access-Control-Allow-Origin", "*");
        xmlHttp.send(body);
    }

    function hideAll()
    {
        // buttons
        hide(button_homeOff);
        hide(button_homeOn);
        hide(button_saveToFolderOff);
        hide(button_saveToFolderOn);
        hide(button_shortenLinkOff);
        hide(button_shortenLinkOn);

        // home 
        hide(text_notLoggedIn);
        hide(text_noUserAccount);
        hide(text_usernameInvalid);
        hide(button_verifyUsername);
        hide(input_newUsername);
        
        // shorten link
        hide(div_shortenLinkContent);
    }

    function showHomePage()
    {
        show(button_homeOn);
        show(button_saveToFolderOff);
        show(button_shortenLinkOff);

        chrome.identity.getProfileUserInfo(function(userInfo)
        {
            if (userInfo.email = empty)
            {
                show(text_notLoggedIn);
            }
            else if (false)
            {
                // if user is logged in but no quicklink account
                // show the according message
                // show username input and confirm username button
            }
        });
    }

    function showSaveToFolderPage()
    {
        show(button_homeOff);
        show(button_saveToFolderOn);
        show(button_shortenLinkOff);
    }

    function showShortenLinkPage()
    {
        show(button_homeOff);
        show(button_saveToFolderOff);
        show(button_shortenLinkOn);

        show(div_shortenLinkContent);

        input_quickLinkPath.value = generateRandomPath();

        chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) 
        {
            var url = tabs[0].url;
        });
    }

    button_homeOff.addEventListener('click', function()
    {
        hideAll();
        showHomePage();
    });

    button_saveToFolderOff.addEventListener('click', function()
    {
        hideAll();
        showSaveToFolderPage();
    });
    button_shortenLinkOff.addEventListener('click', function()
    {
        hideAll();
        showShortenLinkPage();
    });

    button_generateRandomQuickLink.addEventListener('click', function()
    {
        input_quickLinkPath.value = generateRandomPath();
    });

    button_confirmAndCopy.addEventListener('click', function()
    {
        
    });



}
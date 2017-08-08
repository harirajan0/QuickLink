onload = function()
{
    var button_confirmAndCopy = document.getElementById('confirmAndCopy');
    var button_homeOn = document.getElementById('homeOn');
    var button_homeOff = document.getElementById('homeOff');
    var button_shortenLinkOn = document.getElementById('shortenLinkOn');
    var button_shortenLinkOff = document.getElementById('shortenLinkOff');
    var button_saveToFolderOn = document.getElementById('saveToFolderOn');
    var button_saveToFolderOff = document.getElementById('saveToFolderOff');
    var button_generateRandomQuickLink = document.getElementById('generateRandomQuickLink');
    var input_quickLinkPath = document.getElementById('quickLinkPathInput');

    input_quickLinkPath.value = generateRandomPath();

    // default is save to folder
    button_homeOff.style.display = 'none';
    button_shortenLinkOn.style.display = 'none';
    button_saveToFolderOn.style.display = 'none';

    function toggleShowHide(element)
    {
        if (element.style.display === 'none')
        {
            element.style.display = 'block';
        }
        else
        {
            element.style.display = 'none';
        }
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

    button_shortenLinkOff.addEventListener('click', function()
    {
        button_shortenLinkOff.style.display = 'none';
        button_shortenLinkOn.style.display = 'block';
        button_saveToFolderOff.style.display = 'block';
        button_saveToFolderOn.style.display = 'none';
        button_homeOff.style.display = 'block';
        button_homeOn.style.display = 'none';
    });

    button_saveToFolderOff.addEventListener('click', function()
    {
        button_shortenLinkOff.style.display = 'block';
        button_shortenLinkOn.style.display = 'none';
        button_saveToFolderOff.style.display = 'none';
        button_saveToFolderOn.style.display = 'block';
        button_homeOff.style.display = 'block';
        button_homeOn.style.display = 'none';
    });
    button_homeOff.addEventListener('click', function()
    {
        button_shortenLinkOff.style.display = 'block';
        button_shortenLinkOn.style.display = 'none';
        button_saveToFolderOff.style.display = 'block';
        button_saveToFolderOn.style.display = 'none';
        button_homeOff.style.display = 'none';
        button_homeOn.style.display = 'block';
    })

    button_generateRandomQuickLink.addEventListener('click', function()
    {
        input_quickLinkPath.value = generateRandomPath();
    });

    button_confirmAndCopy.addEventListener('click', function()
    {

    });

}
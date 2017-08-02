onload = function()
{
    var button_confirmAndCopy = document.getElementById('confirmAndCopy');
    var button_shortenLinkOn = document.getElementById('shortenLinkOn');
    var button_shortenLinkOff = document.getElementById('shortenLinkOff');
    var button_saveToFolderOn = document.getElementById('saveToFolderOn');
    var button_saveToFolderOff = document.getElementById('saveToFolderOff');
    var button_generateRandomQuickLink = document.getElementById('generateRandomQuickLink');
    var input_quickLinkPath = document.getElementById('quickLinkPathInput');

    input_quickLinkPath.value = generateRandomPath();

    // default is save to folder
    button_shortenLinkOn.style.display = 'none';
    button_saveToFolderOff.style.display = 'none';

    function toggleButtons()
    {
        toggleShowHide(button_shortenLinkOn);
        toggleShowHide(button_shortenLinkOff);
        toggleShowHide(button_saveToFolderOn);
        toggleShowHide(button_saveToFolderOff);
    }

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

    button_shortenLinkOff.addEventListener('click', function()
    {
        toggleButtons();
        console.log("hello");
    });

    button_saveToFolderOff.addEventListener('click', function()
    {
        toggleButtons();
        console.log("hello");
    });

    button_generateRandomQuickLink.addEventListener('click', function()
    {
        input_quickLinkPath.value = generateRandomPath();
    });

}
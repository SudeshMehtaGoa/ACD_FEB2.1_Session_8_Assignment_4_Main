
/*jquery function to change hyperlink and text */
function changeLink()
{
    console.log("------------------------");
    console.log("Before pressing button :")
    console.log($("#dynamicLink").attr('href'));
    console.log($("#dynamicLink").text());

    /* Modify hyperlink and text */
    $("#dynamicLink").attr('href',$("#txtLink").val());
    $("#dynamicLink").text($("#txtLinkText").val());
    
    console.log("");
    console.log("After pressing button :")
    console.log($("#dynamicLink").attr('href'));
    console.log($("#dynamicLink").text());
};

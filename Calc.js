function buttonclick(clk)
{
    document.getElementById("screen").value=document.getElementById("screen").value+clk

}

function displayclear()
{
    document.getElementById("screen").value=""
}

function total()
{
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}
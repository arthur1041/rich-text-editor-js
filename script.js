let isSourceCodeViewSet = false;
let isEditModeSet = true;
let boldButton = document.getElementById("boldButton");

// Turning edit mode on
textField.document.designMode = "On";

function executeCommand(command){
    textField.document.execCommand(command, false, null);
}

function executeCommandWithArguments(command, arg){
    textField.document.execCommand(command, false, arg);
}

function toggleSourceCode(){
   
    if(isSourceCodeViewSet){
        console.log(textField.document.getElementsByTagName('body'));
        textField.document.getElementsByTagName('body')[0].innerHTML = textField.document.getElementsByTagName('body')[0].innerText;
    } else {
        console.log(textField.document.getElementsByTagName('body') );
        textField.document.getElementsByTagName('body')[0].innerText = textField.document.getElementsByTagName('body')[0].innerHTML;
    }
    isSourceCodeViewSet = !isSourceCodeViewSet;
}

function toggleEditMode() {
    if(isEditModeSet){
        textField.document.designMode = "On";
    } else {
        textField.document.designMode = "Off";
    }
    isEditModeSet = !isEditModeSet;
}
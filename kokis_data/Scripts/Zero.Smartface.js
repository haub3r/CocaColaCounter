function Zero_Self_OnKeyPress(e) {
    if (e.keyCode === 4) {
        Application.exit();
    }
}
function Zero_Self_OnShow() {
    //Comment following block for removing navigationbar/actionbar sample
    //Copy this code block to every page onShow
    header.init(this);
    header.setTitle("Cola Zero");
    header.setRightItem("Moikkaa");
    /**/
}
function Zero_CocaCola_OnTouchEnded(e){
    Pages.Classic.show();
}
/*
function Zero_CocaColaZero_OnTouchEnded(e){
    Pages.Zero.show();
}
*/
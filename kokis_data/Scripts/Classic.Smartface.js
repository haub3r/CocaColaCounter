function Classic_Self_OnKeyPress(e) {
    if (e.keyCode === 4) {
        Application.exit();
    }
}
function Classic_Self_OnShow() {
    //Comment following block for removing navigationbar/actionbar sample
    //Copy this code block to every page onShow
    header.init(this);
    header.setTitle("Cola Classic");
    header.setRightItem("Moikkaa");
    /**/
}
/*
function Classic_CocaCola_OnTouchEnded(e){
    Pages.Classic.show();
}
*/
function Classic_CocaColaZero_OnTouchEnded(e){
    Pages.Zero.show();
}
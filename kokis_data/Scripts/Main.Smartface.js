function Main_Self_OnKeyPress(e) {
    if (e.keyCode === 4) {
        Application.exit();
    }
}
function Main_Self_OnShow() {
    //Comment following block for removing navigationbar/actionbar sample
    //Copy this code block to every page onShow
    header.init(this);
    header.setTitle("Info");
    header.setRightItem("Moikkaa");
    /**/
}
function Main_CocaCola_OnTouchEnded(e){
    Pages.Classic.show();
}
function Main_CocaColaZero_OnTouchEnded(e){
    Pages.Zero.show();
}
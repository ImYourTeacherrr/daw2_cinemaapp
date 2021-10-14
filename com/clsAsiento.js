class clsAsiento {
    constructor(pNumberAsiento) {
        this._number = pNumberAsiento;
        this._occupied = 0;//Math.round(Math.random()); // 0 = libre, 1=ocupado, 2=temporal pendiente paso
        this._html_cell;
        this.x;
        this.y;
        this._Init();
    }
    /////////////////////////////////////////////////////////
    _Init(){
        this._CreateCell();
    }
    //////////////////////////////////////////////////////
    _CreateCell(){
        this._html_cell = document.createElement("div");
        this._html_cell.innerHTML = "Asiento:" + this._number;
        this._html_cell.addEventListener("click",this.onclick.bind(this));
        this._html_cell.id = "a" + this._number;
    }
    ////////////////////////////////////////////////////
    reservarAsiento() {
        console.log("Reservar asient");
        this._occupied = 1;
        this._html_cell.removeEventListener('click', null, null);
        this.Draw();
    }
    ////////////////////////////////////////////////////
    Draw() {        
        
        this._html_cell.className= this._getClassName();
        return this._html_cell;
    }
    ///////////////////////////////////////////////////////
    _getClassName(){
        var tClass="";

        if (this.IsOccupied()) {
            tClass="cell_red";
        } else {
            tClass= "cell";
        }

        if (localStorage.getItem('user_num')==this._number){
            tClass = "cell_red_myseat";
        };
        return tClass;
    }
    //////////////////////////////////////////////////////////
    onclick(){
        console.log("test.click->"+ this._html_cell.id);
        this.reservarAsiento();
    }
    /////////////////////////////////////////////////////
    IsOccupied() {
        return (this._occupied > 0);
    }


}
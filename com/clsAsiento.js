class clsAsiento{
    constructor(pNumberAsiento){
        this.number=pNumberAsiento;
        this.ocuppied=0; // 0 = libre, 1=ocupado, 2=temporal pendiente paso
        this.x;
        this.y;
    }
////////////////////////////////////////////////////
    reservarAsiento(){
        this.ocuppied=1;
    }
////////////////////////////////////////////////////
    Draw(){
        let cell = document.createElement("div");
        cell.innerHTML = "Asiento:"+ this.number;
        cell.className = "cell";
        cell.id= "a" + this.number;
        return cell;
    }
}
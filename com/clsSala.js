class clsSala{
    constructor(pID, pNumerodeasientos){
        this.number=pID;
        this.num_asientos=pNumerodeasientos;
        this.asientos=[];
        this.containerHTML=document.getElementById("grid_sala");
        this.CreateAsientos();
    }

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
    CreateAsientos(){
        for (var i=0; i<this.num_asientos; i++){
            var tA= new clsAsiento(i);
            this.asientos.push(tA)
        }
    }
///////////////////////////////////////////////////////////

    DrawAsientos(){
        for (var i=0; i<this.num_asientos; i++){
            var tA= this.asientos[i];
            var tCell= tA.Draw()
            this.containerHTML.appendChild(tCell);
        }
    }

    EraseAsientos(){
        this.containerHTML.innerHTML="";
    }

}
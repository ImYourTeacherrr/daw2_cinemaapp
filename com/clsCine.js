class clsCine{
    constructor(){
        this.sala1;
        this.sala2;
        this.CreateSalas();
        this.DrawSalas();
    }
//////////////////////////////////////////////////////////
    CreateSalas(){
        this.sala1=new clsSala("1", 23);
        this.sala2=new clsSala("2",25);
    }
/////////////////////////////////////////////////////////
    DrawSalas(){
        this.sala1.DrawAsientos();
    }
////////////////////////////////////////////////////////
}
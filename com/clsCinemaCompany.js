


class clsCinemaCompany{


    constructor (){
        this.cine;

        //this._d = new clsDebug();
        //this._d.log("--------Objeto de la clase clsMyGame creada");
        //this._totext();
        //this.CreateFrontEnd();
        this.CreateCines();
    }


///////////////////////////////////////////////////////////////////////////
    CreateCines(){
        this.cine= new clsCine();

    }
///////////////////////////////////////////////////////////////////////////
    _____CreateFrontEnd(){
        
            // (B1) DATA ARRAY
            var data = [
              ["A", "B", "C"],
              ["D", "E", "F"],
              ["G", "H", "I"]
            ];
           
            // (B2) LOOP + ADD CELLS
            
            let container = document.getElementById("grid");

            for (let i of data) { 
                for (let j of i) {
                    let cell = document.createElement("div");
                    cell.innerHTML = j;
                    cell.className = "cell";
                    cell.id= j;
                    container.appendChild(cell);
                }
            };
        
        
    }
////////////////////////////////////////////////////////////////////////////
    _totext (){
        this._d.log("---------------totext method");
    }

}
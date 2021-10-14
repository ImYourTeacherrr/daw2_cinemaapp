


class clsCinemaCompany{


    constructor (){
        this.cine;

        //this._d = new clsDebug();
        //this._d.log("--------Objeto de la clase clsMyGame creada");
        //this._totext();
    
        //this.CreateCines();
        this.CreateCatalog();
    }


///////////////////////////////////////////////////////////////////////////
    CreateCines(){
        this.cine= new clsCine();

    }
    CreateCatalog(){
        this.catalog= new clsCatalog();
    }
///////////////////////////////////////////////////////////////////////////
   
////////////////////////////////////////////////////////////////////////////
    _totext (){
        this._d.log("---------------totext method");
    }

}
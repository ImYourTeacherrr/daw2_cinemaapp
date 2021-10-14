class clsCatalog{

    constructor(){
        this.containerHTML=document.getElementById("film_catalog");
        this._num_peliculas=0;
        this._films=[]
        this._Init();
        this.Draw();

    }

    ////////////////////////////////////////////////////////////////////////////////
    _Init(){
        var tFilm;

        tFilm =new clsFilm("1", "Relic", "Anthony Perkin");
        this._films.push(tFilm);

        tFilm=new clsFilm("2", "Relic2", "Anthony Perkin");
        this._films.push(tFilm);

        this._num_peliculas=2;

    }
    ///////////////////////////////////////////////////////////////////////////////
    Draw(){

        for (var i=0; i<this._num_peliculas; i++){
            var tF= this._films[i];
            var tCell= tF.Draw()
            this.containerHTML.appendChild(tCell);
        }

    }

}
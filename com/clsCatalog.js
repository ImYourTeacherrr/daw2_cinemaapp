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


        var t=`<div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
            <div id="id_carousel" class="carousel-inner">
            </div>
        </div>
        `
        this.containerHTML.innerHTML=t;

        var inner_carousel=document.getElementById("id_carousel");


        for (var i=0; i<this._num_peliculas; i++){
            var tF= this._films[i];
            var tCell= tF.Draw()
            inner_carousel.appendChild(tCell);
        }

    }

}
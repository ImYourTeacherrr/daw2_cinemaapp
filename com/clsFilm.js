class clsFilm{

    constructor(pId, pName, pDirector){
        this._id=pId;
        this._name=pName;
        this._director=pDirector;

        this._html_cell = document.createElement("div");
        this._html_cell.className="card";
    }

    Draw(){

        var t=`
        <div class="carousel-item active">
            <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777"/></svg>
            <div class="container">
            <div class="carousel-caption text-left">
                <h1>Example headline.</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <p><a class="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
            </div>
            </div>
        </div>
       
       ` 
       
       
       
       this._html_cell.innerHTML=t;
        return this._html_cell;
    //<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //<a href="#" class="btn btn-primary">Go somewhere</a>

        
        

    }


}
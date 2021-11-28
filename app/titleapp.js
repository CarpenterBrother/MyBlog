'use strict'

const gsTitle = {
    init(){
        this._root = document.querySelector("#gsTitle");
        this._titles = this._root.querySelectorAll(".gsTitle-title");
        this._frame = this._frame.bind(this);
        this.setTexts([
            "Mahdi Haghi .",
            "Mⲁⲏⲇi Hⲁgⲏⲓ .",
            "Махди Хаghи .",
            "爪闩卄頭讠 卄いᎶ卄讠.",
            "マディ ハ イ .",
            "LXXVII LXXII ."
        ])
    },
    on(){
        if(!this._frameId){
            this._frame();
        }
    },
    off(){
        clearTimeout(this._frameId);
        this._textContext(this._text);
        delete this._framId;
    },
    setTexts([text, ...alt]){
        this._text = text;
        this._textAlt = alt;
    },
    _text: "",
    _textAlt: [],
    _rand( n ) {
        return Math.random() * n | 0;
    },
    _textContent( txt ) {
        this._titles.forEach( el => el.textContent = txt );
    },
    _frame() {
        const txt = Array.from( this._text );
        for ( let i = 0; i < 7; ++i ) {
            const ind = this._rand( this._text.length );

            txt[ ind ] = this._textAlt[ this._rand( this._textAlt.length )][ ind ];
        }
        this._textContent( txt.join( "" ) );
        this._root.classList.add( "gsTitle-glitched" );
        setTimeout( () => {
            this._textContent( this._text );
            this._root.classList.remove( "gsTitle-glitched" );
        }, 50 + Math.random() * 200 );
        this._frameId = setTimeout( this._frame, 250 + Math.random() * 450);
    },

};

gsTitle.init();
gsTitle.on();
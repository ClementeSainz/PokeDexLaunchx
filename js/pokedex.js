const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    // const tipoPokeLabel = document.getElementById("tipoPoke");
    let pokeName = pokeNameInput.value;
    // let tipoPoke =  tipoPokeLabel.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let tipos=data.types.length;
            let ps=data.stats[0].base_stat;
            let attk=data.stats[1].base_stat;
            let df=data.stats[2].base_stat;
            let spattk=data.stats[3].base_stat;
            let spdf=data.stats[4].base_stat;
            let speed=data.stats[5].base_stat;
            stats(ps,attk,df,spattk,spdf,speed);
            console.log(tipos);
            // document.getElementById("tipoPoke").style.backgroundColor="red";
            if(tipos > 1){
                let tipo1, tipo2;
                // tipo=data.types.foreach().type.name;
                tipo1 =data.types[0].type.name;
                tipo2 =data.types[1].type.name;
                tipoPoke(tipo1,tipo2)
            }else{
                let tipo='';
                tipo=data.types[0].type.name;
                tipoPoke(tipo, '');
            }
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
            // console.log(tipo);

        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const stats =(ps,attk,df,spattk,spdf,speed)=>{
    const puntosVida= ps;
    const ataque=attk;
    const defensa=df;
    const spAtaque=spattk;
    const spDefensa=spdf;
    const spd= speed;

    document.getElementById("ps").innerHTML=puntosVida;
    document.getElementById("atk").innerHTML=ataque;
    document.getElementById("def").innerHTML=defensa;
    document.getElementById("spatk").innerHTML=spAtaque;
    document.getElementById("spdf").innerHTML=spDefensa;
    document.getElementById("speed").innerHTML=spd;

}

const tipoPoke = (tipo1,tipo2) => {
    console.log("estas aqui");
    const expre= tipo1;
    const expre2=tipo2;
    switch(expre){
        case 'fire':
            console.log("Estas viendo el tipo de pokemon");
            document.getElementById("tipoPoke1").style.backgroundColor="#F08030";
            document.getElementById("tipoPoke1").innerHTML="Fuego";
        break;

        case 'grass':
            console.log("Estas viendo el tipo de pokemon");
            document.getElementById("tipoPoke1").style.backgroundColor="#78C850";
            document.getElementById("tipoPoke1").innerHTML="Hierba";
        break;
        case 'water':
            console.log("Estas viendo el tipo de pokemon");
            document.getElementById("tipoPoke1").style.backgroundColor="#86A6F2";
            document.getElementById("tipoPoke1").innerHTML="Agua";
        break;
        case 'rock':
            console.log("Estas viendo el tipo de pokemon");
            document.getElementById("tipoPoke1").style.backgroundColor="#B8A038";
            document.getElementById("tipoPoke1").innerHTML="Roca";
        break;
        
        case 'electric':
            console.log("Estas viendo el tipo de pokemon");
            document.getElementById("tipoPoke1").style.backgroundColor="#F9D959";
            document.getElementById("tipoPoke1").innerHTML="Eléctrico";
        break;
        case 'fighting':
            console.log("Estas viendo el tipo de pokemon");
            document.getElementById("tipoPoke1").style.backgroundColor="#C02038";
            document.getElementById("tipoPoke1").innerHTML="Lucha";
        break;
        case 'steel':
            console.log("Estas viendo el tipo de pokemon");
            document.getElementById("tipoPoke1").style.backgroundColor="#B8B8D0";
            document.getElementById("tipoPoke1").innerHTML="Acero";
        break;
        case 'earth':
            console.log("Estas viendo el tipo de pokemon");
            document.getElementById("tipoPoke1").style.backgroundColor="#E0C068";
            document.getElementById("tipoPoke1").innerHTML="Tierra";
        break;
        case 'fairy':
            console.log("Estas viendo el tipo de pokemon");
            document.getElementById("tipoPoke1").style.backgroundColor="#EE99AC";
            document.getElementById("tipoPoke1").innerHTML="Hada";
        break;

        case 'flying':
            console.log("Estas viendo el tipo de pokemon");
            document.getElementById("tipoPoke11").style.backgroundColor="#B9A6F2";
            document.getElementById("tipoPoke11").innerHTML="Volador";
        break;
        case 'bug':
            console.log("Estas viendo el tipo de pokemon");
            document.getElementById("tipoPoke1").style.backgroundColor="#B9C64C";
            document.getElementById("tipoPoke1").innerHTML="Bicho";
        break;
        case 'plant':
            console.log("Estas viendo el tipo de pokemon");
            document.getElementById("tipoPoke1").style.backgroundColor="#78C850";
            document.getElementById("tipoPoke1").innerHTML=expre;
        break;
        case 'poison':
            console.log("Estas viendo el tipo de pokemon");
            document.getElementById("tipoPoke1").style.backgroundColor="#B266B2";
            document.getElementById("tipoPoke1").innerHTML="Veneno";
        break;

        case 'ice':
            console.log("Estas viendo el tipo de pokemon");
            document.getElementById("tipoPoke1").style.backgroundColor="#98D8D8";
            document.getElementById("tipoPoke1").innerHTML="Hielo";
        break;
        case 'psychic':
            console.log("Estas viendo el tipo de pokemon");
            document.getElementById("tipoPoke1").style.backgroundColor="#F85888";
            document.getElementById("tipoPoke1").innerHTML="Psiquico";
        break;
        case 'dragon':
            console.log("Estas viendo el tipo de pokemon");
            document.getElementById("tipoPoke1").style.backgroundColor="#7038F8";
            document.getElementById("tipoPoke1").innerHTML="Dragón";
        break;

        case 'ghost':
            console.log("Estas viendo el tipo de pokemon");
            document.getElementById("tipoPoke1").style.backgroundColor="#705898";
            document.getElementById("tipoPoke1").innerHTML="Fantasma";
        break;
        case 'normal':
            console.log("Estas viendo el tipo de pokemon");
            document.getElementById("tipoPoke1").style.backgroundColor="#B9B992";
            document.getElementById("tipoPoke1").innerHTML="Normal";
        break;
        case 'sinister':
            console.log("Estas viendo el tipo de pokemon");
            document.getElementById("tipoPoke1").style.backgroundColor="#705848";
            document.getElementById("tipoPoke1").innerHTML="Siniestro";
        break;
        // case 'bird':
        //     console.log("Estas viendo el tipo de pokemon");
        //     document.getElementById("tipoPoke").style.backgroundColor="#86A6F2";
        //     document.getElementById("tipoPoke").innerHTML=expre;
        // break;
    }

    switch(expre2){
        case 'fire':
            console.log("Estas viendo el tipo de pokemon");
            document.getElementById("tipoPoke2").style.backgroundColor="#F08030";
            document.getElementById("tipoPoke2").innerHTML="Fuego";
        break;

        case 'grass':
            console.log("Estas viendo el tipo de pokemon");
            document.getElementById("tipoPoke2").style.backgroundColor="#78C850";
            document.getElementById("tipoPoke2").innerHTML="Hierba";
        break;
        case 'water':
            console.log("Estas viendo el tipo de pokemon");
            document.getElementById("tipoPoke2").style.backgroundColor="#86A6F2";
            document.getElementById("tipoPoke2").innerHTML="Agua";
        break;
        case 'rock':
            console.log("Estas viendo el tipo de pokemon");
            document.getElementById("tipoPoke2").style.backgroundColor="#B8A038";
            document.getElementById("tipoPoke2").innerHTML="Roca";
        break;
        
        case 'electric':
            console.log("Estas viendo el tipo de pokemon");
            document.getElementById("tipoPoke2").style.backgroundColor="#F9D959";
            document.getElementById("tipoPoke2").innerHTML="Eléctrico";
        break;
        case 'fighting':
            console.log("Estas viendo el tipo de pokemon");
            document.getElementById("tipoPoke2").style.backgroundColor="#C02038";
            document.getElementById("tipoPoke2").innerHTML="Lucha";
        break;
        case 'steel':
            console.log("Estas viendo el tipo de pokemon");
            document.getElementById("tipoPoke2").style.backgroundColor="#B8B8D0";
            document.getElementById("tipoPoke2").innerHTML="Acero";
        break;
        case 'earth':
            console.log("Estas viendo el tipo de pokemon");
            document.getElementById("tipoPoke2").style.backgroundColor="#E0C068";
            document.getElementById("tipoPoke2").innerHTML="Tierra";
        break;
        case 'fairy':
            console.log("Estas viendo el tipo de pokemon");
            document.getElementById("tipoPoke2").style.backgroundColor="#EE99AC";
            document.getElementById("tipoPoke2").innerHTML="Hada";
        break;

        case 'flying':
            console.log("Estas viendo el tipo de pokemon");
            document.getElementById("tipoPoke2").style.backgroundColor="#B9A6F2";
            document.getElementById("tipoPoke2").innerHTML="Volador";
        break;
        case 'bug':
            console.log("Estas viendo el tipo de pokemon");
            document.getElementById("tipoPoke2").style.backgroundColor="#B9C64C";
            document.getElementById("tipoPoke2").innerHTML="Bicho";
        break;
        case 'plant':
            console.log("Estas viendo el tipo de pokemon");
            document.getElementById("tipoPoke2").style.backgroundColor="#78C850";
            document.getElementById("tipoPoke2").innerHTML=expre;
        break;
        case 'poison':
            console.log("Estas viendo el tipo de pokemon");
            document.getElementById("tipoPoke2").style.backgroundColor="#B266B2";
            document.getElementById("tipoPoke2").innerHTML="Veneno";
        break;

        case 'ice':
            console.log("Estas viendo el tipo de pokemon");
            document.getElementById("tipoPoke2").style.backgroundColor="#98D8D8";
            document.getElementById("tipoPoke2").innerHTML="Hielo";
        break;
        case 'psychic':
            console.log("Estas viendo el tipo de pokemon");
            document.getElementById("tipoPoke2").style.backgroundColor="#F85888";
            document.getElementById("tipoPoke2").innerHTML="Psiquico";
        break;
        case 'dragon':
            console.log("Estas viendo el tipo de pokemon");
            document.getElementById("tipoPoke2").style.backgroundColor="#7038F8";
            document.getElementById("tipoPoke2").innerHTML="Dragón";
        break;

        case 'ghost':
            console.log("Estas viendo el tipo de pokemon");
            document.getElementById("tipoPoke2").style.backgroundColor="#705898";
            document.getElementById("tipoPoke2").innerHTML="Fantasma";
        break;
        case 'normal':
            console.log("Estas viendo el tipo de pokemon");
            document.getElementById("tipoPoke2").style.backgroundColor="#B9B992";
            document.getElementById("tipoPoke2").innerHTML="Normal";
        break;
        case 'sinister':
            console.log("Estas viendo el tipo de pokemon");
            document.getElementById("tipoPoke2").style.backgroundColor="#705848";
            document.getElementById("tipoPoke2").innerHTML="Siniestro";
        break;
        case '':
            console.log("Estas viendo el tipo de pokemon");
            document.getElementById("tipoPoke2").style.backgroundColor="black";
            document.getElementById("tipoPoke2").innerHTML='';
        break;
    }
    tipos=["fire",
        "water",
        "rock",
        "electric",
        "fighting",
        "steel",
        "earth",
        "fairy",
        "flying",
        "bug",
        "plant",
        "poison",
        "ice",
        "psychic",
        "dragon",
        "ghost",
        "normal",
        "sinister",
        "bird",
        "grass"
    ];
}
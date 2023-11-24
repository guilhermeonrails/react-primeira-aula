function Banda(props) {
    return (
        <div className="bandas__cartao">
                <h3>{props.nome}</h3>
                <img src={props.img} alt="" />
        </div>
    )
}

var bandas = (
    <div>
        <Banda nome='Oasis' img='https://api.mgtradio.net/files/images/artists/master/oasis.jpg'></Banda>
        <Banda nome='U2' img='https://mais.opovo.com.br/_midias/jpg/2023/03/15/20220318_u2-21413753.jpg'></Banda>
        <Banda nome="Gun's" img='https://veja.abril.com.br/wp-content/uploads/2017/09/ra_9410.jpg?quality=90&strip=info&w=720&h=440&crop=1'></Banda>
        <Banda nome='Scorpions' img='https://hojepr.com/wp-content/uploads/2022/09/coluna-vidal3-800x560.jpg'></Banda>
    </div>
)

ReactDOM.render(bandas, document.getElementById('bandas'))
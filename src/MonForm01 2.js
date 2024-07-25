import React from "react";

export default class MonForm01 extends React.Component {
    constructor(props) {
        super(props)
        //J'initialise un attribut state.nom avec la valur 'DIGI'
        this.state = {nom : 'DIGI'}
    }
    render() {
        /**
         * onSubmit={(e)=>{e.preventDefault();alert(this.state.nom)}}
         * Je bloque le submit et j'affiche la valeur du state.nom
         * <input type="text" value={this.state.nom} name="nom" 
                        onChange={(e)=>this.setState({nom:e.target.value})}
                        />
            Je fais un lien bilatéral avec le state.nom avec :
            value et le onChange : Il faut connaître le JS et le HTML
         */
        return (
            <form onSubmit={(e)=>{e.preventDefault();alert(this.state.nom)}}>
                    <label htmlFor="nom">Nom</label>
                    <input type="text" value={this.state.nom} name="nom" 
                        onChange={(e)=>this.setState({nom:e.target.value})}
                        />
                    <br/>
                    <input type="submit" value="Validation" />
            </form>
        )
    }
}
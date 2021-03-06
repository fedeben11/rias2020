import React, { Component, useState} from 'react';
import Modal1 from './Modal';
import Jugador from './Jugador';

class Resultado extends Component {
    constructor(props) {

        super(props);
        this.state = { isOpen: false,
            jugador: [],
            equipo: [],
            eq : true
        };
      }
    
      toggleModal = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

      mostrarModal = (jugador)=> {
        this.setState({
            jugador,
            eq : false
        },()=>{
          this.toggleModal();
        })
        
      }   
      mostrarEquipo = (equipo)=> {
        this.setState({
            equipo,
            eq : true
        },()=>{
          this.toggleModal();
        })
        
      }
    mostrarJugadores= () => {
        const jugadores = this.props.jugadores;
        if(jugadores.leght === 0) return null;
        //console.log(jugadores);
        return (
            <React.Fragment>
                    <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                     
                            <th >#</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Equipo</th>	
                            <th>Posicion</th>		
                        </tr>
                    </thead>
                    <tbody>
                        {jugadores.map(jugador =>(
                            <Jugador 
                                key={jugador.id}
                                jugador={jugador}
                                mostrarModal={this.mostrarModal}
                                mostrarEquipo={this.mostrarEquipo}
                            />
                        ))}
                        
                    </tbody>
                    </table>
                    <footer className="page-footer font-small blue">

   
                    <div className="footer-copyright text-center py-3">© Taller de Aplicaciones Internet Ricas 2020
                    </div>


                    </footer>
            </React.Fragment>
        )
    }

    render() {
        return (
           <React.Fragment>
               {this.mostrarJugadores()}
               <Modal1
                    show={this.state.isOpen}
                    onClose={this.toggleModal}
                    jugador={this.state.jugador}
                    equipo={this.state.equipo}
                    eq={this.state.eq}
                />
                   
           </React.Fragment>  
           
        );
    }
}

export default Resultado;
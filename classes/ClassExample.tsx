// definir un componente por medio de una clase

import { Component, ErrorInfo, ReactNode } from 'react';
import { Text, View, Button } from 'react-native';


export class ClassExample extends Component<{nombre: string}, {nombre: string, cuenta: number}> {

    // life cycle / ciclo de vida
    // https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

    // PROPS - propiedades. Valores que recibimos del exterior como
    // argumentos que mi componente puede utilizar.

    constructor(props: any) {
        super(props);
        console.log("CONSTRUCTOR");

        // ESTADO - conjunto de variables que son parte de la definición
        // interna del componente
        // SIMILAR a variable de instancia PERO con funcionalidad extra
        // relacionada al ciclo de vida.
        
        // esto se hace una sola vez y en el constructor
        this.state = {nombre: props.nombre, cuenta: 0};
    }

    // SI TENEMOS UN COMPONENTE DEFINIDO EN UNA CLASE
    // ESTAMOS OBLIGADOS A IMPLEMENTAR EL MÉTODO RENDER
    render() {
        
        console.log("RENDER");
        return(
            <View>
                <Text>HOLA SOY UN COMPONENTE! y me llamo {this.state.nombre}</Text>
                <Text>UN PROP: {this.props.nombre}</Text>
                <Text>Cuenta actual: {this.state.cuenta}</Text>
                <Button 
                    title='INCREMENTAR CUENTA'
                    onPress={() => {
                        this.setState((state) => {
                            return {cuenta: state.cuenta + 1};
                        });
                    }}
                />
            </View>
        );
    }

    componentDidMount(): void {
        console.log("COMPONENT DID MOUNT");
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log("COMPONENT DID UPDATE");
    }

    componentWillUnmount(): void {
        console.log("COMPONENT WILL UNMOUNT");
    }
}
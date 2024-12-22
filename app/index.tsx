import React from "react";
import SplashScreen from "./SplashScreen";
import HomeScreen from "./HomeScreen"; // Tela principal do app

interface ApplicationState {
  view: JSX.Element; // Define a propriedade 'view' como um componente React
}

export default class Application extends React.Component<{}, ApplicationState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      view: <SplashScreen />, // Define a tela inicial como SplashScreen
    };
  }

  componentDidMount() {
    setTimeout(() => {
      // Substitui SplashScreen por HomeScreen após 3 segundos
      this.setState({
        view: <HomeScreen />,
      });
    }, 5000); // Tempo de espera
  }

  render() {
    return this.state.view; // Retorna a tela atual
  }
}

import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import jsonData from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './components/SelectedBeast';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data: jsonData,
        show: false
    };
}



handleModel = () => {

  this.setState({ show:!this.state.show})
}


  render() {
    return (
      <div>
        <Header />
        <Main jsonData1={this.state.data} showFunc={this.handleModel}/>
        <SelectedBeast showMyModal={this.state.show} notShow={this.handleModel} />
        <Footer />
      </div>
    );
  }
}
export default App;

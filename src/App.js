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
      show: false,
      getInfo: {}
    };
  }



  handleModel = (e) => {

    this.setState(
      {
        show: !this.state.show,
        getInfo: e
      }
    )

  }


  render() {
    return (
      <div>
        <Header />
        <Main jsonData1={this.state.data} showFunc={this.handleModel} />
        <SelectedBeast showMyModal={this.state.show} notShow={this.handleModel} hornedInfo={this.state.getInfo}  />
        <Footer />
      </div>
    );
  }
}
export default App;

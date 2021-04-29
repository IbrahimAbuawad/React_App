import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import jsonData from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './components/SelectedBeast';
import Forms from './components/Forms';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: jsonData,
      show: false,
      getInfo: {},
      filterForm: jsonData
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

  handleModelForForm = (e) => {

   this.setState({
    filterForm:e

   })

  }


  render() {
    return (

      <div>
        <Header />
        <Forms  myState={this.handleModelForForm}/>
        <Main jsonData1={this.state.data} showFunc={this.handleModel} myState={this.state.filterForm}/>
        <SelectedBeast showMyModal={this.state.show} notShow={this.handleModel} hornedInfo={this.state.getInfo}  />
        <Footer />
      </div>
    );
  }
}
export default App;

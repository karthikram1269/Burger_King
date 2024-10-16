import {Component} from 'react';
import Nav from './Comp1/Nav';
import Cont from './Comp1/Cont';
import Cards from './Comp1/Cards';
import data from './Comp1/data';
import Cont1 from './Comp1/Cont1';
import Foot from './Comp1/Foot';

class App extends Component{
  render(){
      return(
          <>
              <Nav/>
              <Cont/>

             <div className='cards' >
             {
                data.map((x,index)=>{
                  return(
                    <Cards
                          key={index}  img = {x.img} h2={x.h2} p={x.p} a={x.a} button={x.button}
                    />
                  )
                })
              }
             </div>
             <Cont1/>
             <Foot/>
          </>
      )
  }
}
export default App;

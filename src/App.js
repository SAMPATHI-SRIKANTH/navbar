import { Component } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {ImCross} from 'react-icons/im'
import './App.css';

class App extends Component{

  state = {
    isdropdownActive:false,
    isMenuClicked:false
  }

  onClickMenu = () => (
    this.setState(prevState => ({
    isMenuClicked:!prevState.isMenuClicked}
    ))
  )

  onClickDropDown = () => (
    this.setState(prevState => ({
      isdropdownActive:!prevState.isdropdownActive
    }))
  )

  render(){
    const {isdropdownActive,isMenuClicked} = this.state

    return(
      <div className="app">
           {!isMenuClicked && (
          <>
      <nav>      
          <div className='home'>
            <button type='button' onClick={this.onClickMenu}>
            <GiHamburgerMenu size="25"/>
            </button>

        </div>
        <ul className="horizontal">
          <li onClick={this.onClickDropDown}>
          DropDown 
            <div>
              {isdropdownActive && (
          <ul className='option-container'>
          <li>
            <div className='input'>
              <input type="checkbox" id="option1"/>
              <label htmlFor="option1">Option1</label>
            </div>
          </li>
          <li>
            <div className='input'>
              <input type="checkbox" id="option2"/>
              <label htmlFor="option2">Option2</label>
            </div>
          </li>
          <li>
            <div className='input'>
              <input type="checkbox" id="option3"/>
              <label htmlFor="option3">Option3</label>
            </div>
          </li>
        </ul>
              )}
            </div>
          </li>
          <li>Filter2</li>
          <li>Filter3</li>
          <li>Filter4</li>
          <li>Filter6</li>
          <li>Filter7</li>
          <li>Filter8</li>
          <li>Filter9</li>
        </ul>
      </nav>
      <div className='containers'>
        <div className='box'>
          <p>One</p>
        </div>
        <div className='box'>
          <p>Two</p>
        </div>
        <div className='box'>
          <p>Three</p>
        </div>
      </div>
      </>)}
      {isMenuClicked && (
        <nav>
          <div className='cross-btn'>
            <button type='button' onClick={this.onClickMenu}>
            <ImCross size="25"/>
            </button>
            
          </div>
          <ul>
            <li>Home</li>
            <li onClick={this.onClickDropDown}>Dropdown Menu 
            <div>
             {isdropdownActive && (
              <ul className='menu-drop'>
                <li>One </li>
                <li>Two</li>
                <li>Three</li>
              </ul>
             )}
            </div>
           </li>
           <li>Logout</li>
          </ul>
        </nav>
      )}
    </div>

    )
  }

}

export default App;

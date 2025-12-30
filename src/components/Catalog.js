import React, { Component } from 'react'
class Catalog extends Component {
    constructor(props) {
        super(props);
        this.state={
            show1:false,
            show2:false,
            show:false,
        }
    }
    handleShow=()=>{
        const {show} = this.state
        this.setState({show:!show})
    }
    handleShow1=()=>{
        const {show1} = this.state
        this.setState({show1:!show1})
    }
    handleShow2=()=>{
        const {show2} = this.state
        this.setState({show2:!show2})
    }
  render() {
    const {show,show1,show2} = this.state
    return (
      <div>
        <div className='catalogy'>
            <div className='catpart1'>
           
            </div>
            <div className='catpart2'>
                <div className='catpage1'>
                <span className='cattext'> <i>Здесь выбрал твои самые красивые фотки</i></span>
                
                </div>
                <div className='catpage2'>
                    <div className='catpage'>
                    <img src='../images/14.jpg' className='img3'/>
                    <span className='catdivtext'>Здесь 10/10</span>
                   
                    </div>
                    <div className='catpage'>
                    <img src='../images/15.jpg' className='img3'/>
                    <span className='catdivtext'>И здесь 10/10</span>
                  
                    </div>
                    <div className='catpage'>
                    <img src='../images/13.jpg' className='img3'/>
                    <span className='catdivtext'>Думаю здесь и можно 11/10</span>
                
                    </div>
                </div>
                <div className='catpage2'>
                    <div className='catpage'>
                    <img src='../images/12.jpg' className='img3'/>
                    <span className='catdivtext'>Слишком красиво точно 100/10</span>
                   
                    </div>
                    <div className='catpage'>
                    <img src='../images/14.jpg' className='img3'/>
                    <span className='catdivtext'>Здесь вообще 1000/10</span>
                   
                    </div>
                    <div className='catpage'>
                    <img src='../images/16.jpg' className='img3'/>
                    <span className='catdivtext'>С челкой ты безупречная здесь не хватит цифры</span>
                   
                    </div>
                </div>
                <div className='catpage2'>
                    <div className='catpage'>
                    <img src='../images/17.jpg' className='img3'/>
                    <span className='catdivtext'>Идеально 10/10</span>
                
                    </div>
                    <div className='catpage'>
                    <img src='../images/18.jpg' className='img3'/>
                    <span className='catdivtext'>Точно 11/10</span>
                   
                    </div>
                    <div className='catpage'>
                    <img src='../images/19.jpg' className='img3'/>
                    <span className='catdivtext'>То что я просил ты скинула так что 1000/10</span>
                    
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
export default Catalog
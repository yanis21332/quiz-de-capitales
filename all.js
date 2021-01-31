import React,{Component} from 'react';
import hommeImage from './resources/homme.svg';
import data from './data.js';

class all extends Component
{
    
    render(){
        let QuestionGenerated = "";

        data(QuestionGenerated)

        console.log(all + " bonjour le monde")    
        return(
            <section>
                <div className = "container">
                    <div className = "FirstZoneOfCard">
                        <h1 className = "title" >Country quiz</h1>
                        <img src = {hommeImage} alt = "image d'un homme" />
                    </div>
                    <div className = "card">
                        <h2 className = "Question">{QuestionGenerated}</h2>
                        <div className = "answers">
                            <div className = "bloc1 answer"><h2 className = "ennumeration enum1">A</h2><p>Vietnam</p></div>
                            <div className = "bloc2 answer"><h2 className = "ennumeration enum2">B</h2><p>Malaysia</p></div>
                            <div className = "bloc3 answer"><h2 className = "ennumeration enum3">C</h2><p>Sweden</p></div>
                            <div className = "bloc4 answer"><h2 className = "ennumeration enum4">D</h2><p>Austria</p></div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default all;
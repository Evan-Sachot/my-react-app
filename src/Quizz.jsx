import React, { Component } from "react";
import QBank from "./qBank.jsx"





class Quiz extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            questionBank:QBank,
            currentQuestion:0,
            selectedOption:"",
            score:0,
            quizEnd:false
        }
    }
    handleOptionChange =(e)=>{
        this.setState({selectedOption:e.target.value});
    }
    handleFormSubmit =(e)=> {
        e.preventDefault();
        this.checkAnswer();
        this.handleNextQuestion();
    }

    checkAnswer = () => {
        const {questionBank, currentQuestion,selectedOption,score} = this.state;
        if(selectedOption===questionBank[currentQuestion].answer){
            this.setState((prevState)=>({score:prevState.score+1}));
        }
    }
    handleNextQuestion = ()=> {
        const {questionBank,currentQuestion}= this.state;
        if(currentQuestion +1 < questionBank.length){
            this.setState((prevState)=> ({
               currentQuestion: prevState.currentQuestion+1,
               selectedOption:"", 
            }))
        }else {
            this.setState({
                quizEnd: true
            })
        }
    }
    render(){
        const {questionBank,currentQuestion,selectedOption,score,quizEnd} = this.state;
        return (
        <div>
            <h1>QUIZ</h1>
            {!quizEnd ? (
                <Question 
                    question={questionBank[currentQuestion]}
                    selectedOption={selectedOption}
                    onOptionChange={this.handleOptionChange}
                    onSubmit ={this.handleFormSubmit}
                    score ={score}
                />
            ):(
                <Score 
                    score={score}
                    onNextQuestion={this.handleNextQuestion}
                    className="score"
                />
            )}
        </div>
        )
    }
}
class Question extends Component {
    render (){
        const {question,selectedOption,onOptionChange,onSubmit,score}= this.props
        
        return(
            <div className="">
                <h3>Score {score}</h3>
                <h3>Question {question.id}</h3>
                <h5 className="">{question.question}</h5>
                <form onSubmit={onSubmit} className="">
                    <Options
                    options={question.options}
                    selectedOption={selectedOption}
                    onOptionChange={onOptionChange} 
                    />
                    <button type="submit">SUBMIT</button>
                </form>
            </div>
        )
    }
}
class Options extends Component {
    render() {
        const { options, selectedOption, onOptionChange } = this.props;

        return (
            <div className='options'>
                {options.map((option, index) => (
                    <div key={index} className="form-check">
                        <input
                            type="radio"
                            name="option"
                            value={option}
                            checked={selectedOption === option}
                            onChange={onOptionChange}
                            className="form-check-input"
                        />
                        <label className="form-check-label">{option}</label>
                    </div>
                ))}
            </div>
        );
    }
}




class Score extends Component {
    render() {
        const { score, onNextQuestion } = this.props;

        return (
            <div>
                <h2>Results</h2>
                <h4>Your score: {score}</h4>
            </div>
        );
    }
}


export default Quiz
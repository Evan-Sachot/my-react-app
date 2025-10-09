import React from "react";


class Quiz {
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
        const {questionBank, currentQuestion,selectedOption,score}=
        this.state;
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
    render(){}
}
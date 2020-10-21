import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'

// all components
import { Layout } from './components/Layout'
import NavigationBar from './components/NavigationBar'
import TopNavbar from './components/TopNavbar'

import InputForm from './components/InputForm'
import QuestionsPage from './components/QuestionsPage'
import TimePage from './components/TimePage'
import EmailPage from './components/EmailPage'
import AllProspectsPage from './components/AllProspectsPage'
import { ConfirmPage } from './components/sixBoxForms'
import TemplatePage from './components/TemplatePage';
import CampaignPage from './components/CampaignPage';
import DashboardPage from './components/DashboardPage';
import ComptePage from './components/ComptePage'
import WelcomePage from './components/WelcomePage';
import Not_found from './components/Not_found';
import UserStrategyPage from './components/User_StrategyPage'

import { AllMichelQuestionsPage, WelcomeQuestionsPage, Question_one, Question_two, Question_three, Question_four, Question_five, Question_six, SubmitAllAnswers } from "./components/allQuestions/index";

// notification
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';





export default function App() {

    // if you want to make it a class component, you can as well .

    const [user, setUser] = useState({ userName: 'Tesfalem', email: 'tesft@gmail.com', address: 'Tel-Yaffo' })
    const [step, setStep] = useState(1)
    const [stepBox, setStepBox] = useState(1)



    // TODO this func is going to block user if the field is empty....!
    const nextHandler = (x, data) => {

        if (x.length == 0 || data.length == 0) {

            setStep(step)
            store.addNotification({
                title: "Warning...!",
                message: "fields can not be empty...",
                type: "danger",
                insert: "bottom",
                container: "bottom-left",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: true, // if u have customize notifier you have to comment out this(if not it will; not work)
                    showIcon: true // for the x icon
                }
            });

        } else {

            setStep(step + 1)

        }
    }





    return (

        <div>

            <ReactNotification />



            <div className='main_body'>

                <TopNavbar />

                <div className="layoutDiv">

                    <NavigationBar />

                    <Router>
                        <Switch>


                            {/* if u've two the same route but one with id  U need to add exact to one of them: else it won't work*/}

                            {step == 1 && <Route exact path="/inputPage" render={props => <InputForm {...props} step={step} nextHandler={nextHandler} />} />}
                            {step == 2 && <Route exact path="/inputPage" render={props => <QuestionsPage {...props} step={step} nextHandler={nextHandler} />} />}
                            {step == 3 && <Route exact path="/inputPage" render={props => <AllProspectsPage {...props} step={step} nextHandler={nextHandler} />} />}
                            {step == 4 && <Route exact path="/inputPage" render={props => <TimePage {...props} step={step} nextHandler={nextHandler} />} />}
                            {step == 5 && <Route exact path="/inputPage" render={props => <TemplatePage {...props} step={step} nextHandler={nextHandler} />} />}

                            <Route path="/questionsPage" render={props => <QuestionsPage {...props} nextHandler={nextHandler} />} />
                            <Route path="/allProspectsPage" render={props => <AllProspectsPage {...props} nextHandler={nextHandler} />} />
                            <Route path="/timePage" render={props => <TimePage {...props} nextHandler={nextHandler} />} />
                            <Route path="/emailPage" render={props => <EmailPage {...props} user={user} nextHandler={nextHandler} />} />
                            <Route path="/confirmPage" render={props => <ConfirmPage {...props} user={user} nextHandler={nextHandler} />} />
                            <Route path="/templatePage" render={props => <TemplatePage {...props} />} />
                            <Route path="/campaignPage" render={props => <CampaignPage {...props} />} />
                            <Route path="/welcomePage" render={props => <WelcomePage {...props} />} />
                            <Route path="/dashboardPage" render={props => <DashboardPage {...props} />} />
                            <Route path="/comptePage" render={props => <ComptePage {...props} />} />
                            <Route path="/userStrategyPage" render={props => <UserStrategyPage {...props} />} />

                            <Route path="/allMichelQuestionsPage" render={props => <AllMichelQuestionsPage {...props} />} />
                            <Route path="/welcomeQuestionsPage" render={props => <WelcomeQuestionsPage {...props} />} />
                            <Route path="/question_one" render={props => <Question_one {...props} />} />
                            <Route path="/question_two" render={props => <Question_two {...props} />} />
                            <Route path="/question_three" render={props => <Question_three {...props} />} />
                            <Route path="/question_four" render={props => <Question_four {...props} />} />
                            <Route path="/question_five" render={props => <Question_five {...props} />} />
                            <Route path="/question_six" render={props => <Question_six {...props} />} />
                            <Route path="/submitAllAnswers" render={props => <SubmitAllAnswers {...props} />} />

                            <Route render={props => <Not_found {...props} />} />

                        </Switch>

                    </Router>


                </div>
            </div>


            <div className='footerDiv'>
                MENTIONS LEGALES - CONDITIONS GENERALES
                </div>

        </div>

    );

    // function CustomizedNotifier () {
    //     return (
    //     <div style={{ backgroundColor: 'blue', opacity: '0.5', height: '40px', width: '500px', color: 'white', marginBottom: '10px', textAlign: 'center'}}>
    //         <p>Dumass...</p>
    //     </div>)
    // }





}

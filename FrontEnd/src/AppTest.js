import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';


// all components
import {Layout} from './components/Layout'
import InputForm from './components/InputForm'
import QuestionsPage from './components/QuestionsPage'
import NavigationBar from './components/NavigationBar'
import EmailPage from './components/EmailPage'
import TimePage from './components/TimePage'
import Not_found from './components/Not_found';
import WelcomePage from './components/WelcomePage';
import TopNavbar from './components/TopNavbar'
import TemplatePage from './components/TemplatePage';
import CampaignPage from './components/CampaignPage';
import DashboardPage from './components/DashboardPage';
import ComptePage from './components/ComptePage'
import TestInputForm from './components/TestIputForm'

  
  export default class AppTest extends Component {

            constructor(props){
                super(props)
                this.state = {
                        user: { userName: 'Tesfalem',Email: 'tesft@gmail.com',Address: 'Tel-Yaffo'},
                        step: 1
                    
                }
            }

               // TODO this func is going to block user if the field is empty....!
                // TODO ===========================================================
            
                nextHandler = (x, y)=> {
                    const {step} = this.state
                    console.log('.........hello', step);
                    
                    if (x.length == 0 || y.length == 0) {
                    
                        this.setState({step})
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
                        
                    }else{
                        this.setState({step: step+1})
                    }
                }





            nextStep = ()=> {
                const {step} = this.state
                this.setState({step: step+1})
                alert(step)
            }
 
      render() {

        const {step, user} = this.state

          return (
                      <div>

                           <ReactNotification />

                        
                            <div className='main_body'>

                                <TopNavbar/>

                                <div className="layoutDiv">

                                    <NavigationBar /> 

                                        <Router>
                                            <Switch>
                                              
                                              
                                                { step == 1 && <Route exact path="/" render={props => <TestInputForm {...props} step={step} nextHandler={this.nextHandler}/>}/> }
                                                { step == 2 && <Route path="/" render={props => <QuestionsPage {...props} step={step} nextHandler={this.nextHandler}/>}/> }
                                                { step == 3 && <Route path="/" render={props => <TimePage {...props} step={step} nextHandler={this.nextHandler}/>}/> }
                                                { step == 4 && <Route path="/" render={props => <EmailPage {...props} step={step} nextHandler={this.nextHandler}/>}/> }


                                                <Route exact path="/" render={props => <TestInputForm {...props} step={step} nextHandler={this.nextHandler}/>}/>
                                                <Route path="/TestInputForm" render={props => <TestInputForm {...props} step={step} nextHandler={this.nextHandler}/>}/>
                                                <Route path="/QuestionsPage" render={props => <QuestionsPage {...props} user={user}/>}/>
                                                <Route path="/TimePage" render={props => <TimePage {...props}/>}/>
                                                <Route path="/EmailPage" render={props => <EmailPage {...props} user={user}/>}/>
                                                <Route path="/TemplatePage" render={props => <TemplatePage {...props}/>}/>
                                                <Route path="/CampaignPage" render={props => <CampaignPage {...props}/>}/>
                                                <Route path="/WelcomePage" render={props => <WelcomePage {...props}/>}/>
                                                <Route path="/DashboardPage" render={props => <DashboardPage {...props}/>}/>
                                                <Route path="/ComptePage" render={props => <ComptePage {...props}/>}/>
                                                <Route path="/TestInputForm" render={props => <TestInputForm {...props}/>}/>
                                                <Route render={props => <Not_found {...props}/>}/>
                                            </Switch>
                                            
                                        </Router>   
                                        
                                    </div>                 
                            </div>

                                <div className='footerDiv'>
                                    MENTIONS LEGALES - CONDITIONS GENERALES
                                </div>

                    </div>
          )
      }
  }
  



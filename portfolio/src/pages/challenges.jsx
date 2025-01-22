import React from "react";
import todo from '../assets/pictures/ToDo_code.png'
import expenses from '../assets/pictures/Expenses_code.png'
import { Carousel } from "react-bootstrap";


function Challenges(){
    return(
    <>
        <div className="portfolio-title">
            <h2>
                Portfolio
            </h2>
        </div>
        <div className="portfolio-title">
            <h2>
                Step8Up Weekly Challenges
            </h2>
        </div>
        <Carousel>
            <Carousel.Item>
                    <img src={todo}/>
            </Carousel.Item>
            <Carousel.Item>
                    <img src={expenses}/>
            </Carousel.Item>
        </Carousel>
        <div className="portfolio">
            <ul className="portfolio-list">
                <li>
                    <div className="portfolio-card">
                        <div className="portfolio-card-title">
                            <h3>
                                Simple Personal Website
                            </h3>
                        </div>
                        <div className="portfolio-card-content">
                            <p>
                                The first Step8Up Bootcamp challenge, we were tasked with creating a simple web page. This served as an introduction to html and css development.
                            </p>
                            <a href="https://github.com/Matones01/Week-1-Challenge">Github Link</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="portfolio-card">
                        <div className="portfolio-card-title">
                            <h3>
                                Multi-page responsive website
                            </h3>
                        </div>
                        <div className="portfolio-card-content">
                            <p>
                                The second challenge was to make a responsive multi-paged website. This was to teach us about Flexbox and page links.
                            </p>
                            <a href="https://github.com/Matones01/Week-2-Challenge">Github Link</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="portfolio-card">
                        <div className="portfolio-card-title">
                            <h3>
                                Bootstrap
                            </h3>
                        </div>
                        <div className="portfolio-card-content">
                            <p>
                                The third challenge was to migrate a website to Bootstrap. 
                            </p>
                            <a href="https://github.com/Matones01/Week-3-Challenge">Github Link</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="portfolio-card">
                        <div className="portfolio-card-title">
                            <h3>
                                Interactive TODO list
                            </h3>
                        </div>
                        <div className="portfolio-card-content">
                            <p>
                                The fourth challenge was to create an interactive TODO list using Javascript.
                            </p>
                            <a href="https://github.com/Matones01/Week-4-Challenge">Github Link</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="portfolio-card">
                        <div className="portfolio-card-title">
                            <h3>
                                Testing modularised calculator 
                            </h3>
                        </div>
                        <div className="portfolio-card-content">
                            <p>
                                The fifth challange was to create a calculator and apply Test Driven Development to it. 
                            </p>
                            <a href="https://github.com/Matones01/Week-5-Challenge">Github Link</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="portfolio-card">
                        <div className="portfolio-card-title">
                            <h3>
                                To-Do list in Python
                            </h3>
                        </div>
                        <div className="portfolio-card-content">
                            <p>
                                The sixth challenge was to create a to-do list application in python. This was to learn how to handle JSON data with Python as well as generally using Python to create applications.
                            </p>
                            <a href="https://github.com/Matones01/Week-2-Challenge">Github Link</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="portfolio-card">
                        <div className="portfolio-card-title">
                            <h3>
                                Expenses Tracker
                            </h3>
                        </div>
                        <div className="portfolio-card-content">
                            <p>
                                The seventh challenge was to create an Expenses Tracker with mocked api calls.
                            </p>
                            <a href="https://github.com/Matones01/Week-7-Challenge">Github Link</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="portfolio-card">
                        <div className="portfolio-card-title">
                            <h3>
                                Django Orders Management website 
                            </h3>
                        </div>
                        <div className="portfolio-card-content">
                            <p>
                                The eighth challenge was to create a simple Django website. The website should allow the user to create, update, view and delete orders. 
                            </p>
                            <a href="https://github.com/Matones01/Week-8-Challenge">Github Link</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="portfolio-card">
                        <div className="portfolio-card-title">
                            <h3>
                                Portfolio
                            </h3>
                        </div>
                        <div className="portfolio-card-content">
                            <p>
                                The ninth challenge was to create this website to act as a portfolio.
                            </p>
                            <a href="https://github.com/Matones01/Week-9-Challenge">Github Link</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </>
    )
}

export default Challenges;
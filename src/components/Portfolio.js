import React, { Component } from "react";
import ProjectList from "./ProjectList";
import Toolbar from "./Toolbar";


class Portfolio extends React.Component {
        

        constructor(props) {
            super(props);
            this.allEvent = [{
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
                category: "Business Cards"
              }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
                category: "Websites"
              }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
                category: "Websites"
              }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
                category: "Websites"
              }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
                category: "Business Cards"
              }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
                category: "Websites"
              }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
                category: "Websites"
              }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
                category: "Business Cards"
              }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
                category: "Websites"
              }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
                category: "Flayers"
              }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
                category: "Websites"
              }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
                category: "Business Cards"
              }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
                category: "Websites"
              }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
                category: "Websites"
              }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
                category: "Business Cards"
              }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
                category: "Websites"
              }, {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
                category: "Flayers"
              }];
            this.state = {
                 filters: ["All", "Websites", "Flayers", "Business Cards"],
                 selected:"All"
                }
        
        }

      

        allClick = (event) => {
            this.setState((prevStater) => ({selected : "All"}))
        }

        websitesClick = (event) => {
            this.setState((prevStater) => ({selected : "Websites"}))
        }

        flayersClick = (event) => {
            this.setState((prevStater) => ({selected : "Flayers"}))
        }
        businessCardsClick = (event) => {
            this.setState((prevStater) => ({selected : "Business Cards"}))
        }


        render() {
            //  const {user} = this.props;
            const { selected } = this.state;
            let categoryFilter = this.allEvent;
            if (selected != "All") {
            categoryFilter = this.allEvent.filter(categ => categ.category == selected);
            }
            
            
            return ( 
                <div className="contener">
                    <div className="contenerBut">
                         <button onClick={this.allClick}>all</button>
                         <button onClick={this.websitesClick}>websites</button>
                         <button onClick={this.flayersClick}>flayers</button>
                         <button onClick={this.businessCardsClick}>business Cards</button>
                        </div>
                    <Toolbar  filters={["All", "Websites", "Flayers", "Business Cards"]}
                              selected= { selected }
                              onSelectFilter={(filter) => {console.log(filter);}}/>
                    <div>
                        <ProjectList category={categoryFilter}/>
                    </div>
                </div>
            );
            }

        }

        export default Portfolio;
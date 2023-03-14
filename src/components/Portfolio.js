import React, { Component } from "react";
import ProjectList from "./ProjectList";
import Toolbar from "./Toolbar";


class Portfolio extends React.Component {
        

        constructor(props) {
            super(props);
            this.allEvent = [{
                key : 1,
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
                category: "Business Cards"
              }, {
                key : 2,
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
                category: "Websites"
              }, {
                key : 3,
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
                category: "Websites"
              }, {
                key : 4,
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
                category: "Websites"
              }, {
                key : 5,
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
                category: "Business Cards"
              }, {
                key : 6,
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
                category: "Websites"
              }, {
                key : 7,
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
                category: "Websites"
              }, {
                key : 8,
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
                category: "Business Cards"
              }, {
                key : 9,
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
                category: "Websites"
              }, {
                key : 10,
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
                category: "Flayers"
              }, {
                key : 11,
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
                category: "Websites"
              }, {
                key : 12,
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
                category: "Business Cards"
              }, {
                key : 13,
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
                category: "Websites"
              }, {
                key : 14,
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
                category: "Websites"
              }, {
                key : 15,
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
                category: "Business Cards"
              }, {
                key : 16,
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
                category: "Websites"
              }, {
                key : 17,
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
                category: "Flayers"
              }];
            this.state = {
                 filters: ["All", "Websites", "Flayers", "Business Cards"],
                 selected:"All"
                }
        
        }

      

           CardsClick = (value) => {
           
            this.setState((prevStater) => ({selected : value}))
        }


        render() {
            //  const {user} = this.props;
            const { selected } = this.state;
            let categoryFilter = this.allEvent;
            
           if (selected != "All") {
            categoryFilter = categoryFilter.filter(categ => categ.category == selected);
            }
            
            
            return ( 
                <div className="contener">
                    
                    <Toolbar  filters={["All", "Websites", "Flayers", "Business Cards"]}
                              selected= { selected }
                              onSelectFilter={this.CardsClick}/>
                    <div>
                        <ProjectList key={categoryFilter.key} category={categoryFilter}/>
                    </div>
                </div>
            );
            }

        }

        export default Portfolio;
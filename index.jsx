var React = require('react');


var App = React.createClass({
    getInitialState:function(){

        return {width:0,height:0};
    },

    componentDidMount:function(){
        TweenLite.to(this,2,{state:{width:100, height:100,backgroundColor:"Red"}, ease:Power4.easeInOut});
    },

    render:function(){
        return (<div style={{width:this.state.width,
                             height :this.state.height,
                             backgroundColor:this.state.backgroundColor

                             }}>
            </div>);
    }
});

React.render(<App/>,document.getElementById('content'));
import React from'react';

class Filters extends React.Component{
    render(){
        return(
            <form>
                <input typr="text" placeholder="Search.."/>
                <p>
                    <label>
                        <input type="checkbox"/>
                        &nbsp;
                        Only show produts in stock
                    </label>
                </p>
            </form>
        );
    }

}

export default Filters;
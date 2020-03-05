import React from 'react';
import './SortableColumnHeader.css';

class SortableColumnHeader extends React.Component{
    render(){
        return(
            <th>
               {this.props.column}
               <button className="SortableColumnHeader-current">&#x25B2;</button>
                <button>&#x25BC;</button>
            </th>
        );
    }

}

export default SortableColumnHeader;
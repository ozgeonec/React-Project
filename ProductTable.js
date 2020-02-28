import react from 'react';
import ProductRow from './ProductRow.js';
import SortableColumnHeader from './SortableColumnHeader.js';

class ProductTable extends React.Component{
    render(){
        let productsAsArray = Object.keys(this.props.products).map((pid)=>this.props.produts{pid});
        let rows = this.props.products.map((product)=>{
            return (
                <ProductRow product={product} key={product.id}/>
            );
        });

        return(
            <table>
                <thead>
                <tr>
                    <SortableColumnHeader column= "name"/>
                    <SortableColumnHeader column="price"/>

                </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>

        );
    }

} 

export default ProductTable;
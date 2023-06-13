import React from "react";
import { NavLink, Table } from "reactstrap";

function Content({urunler}){
    
    
    return(
        
        <Table>
            
        <thead>
        <br/>
          <tr>
            
            <th>Categories</th>
            
          </tr>
        </thead>
        <br/>
        <tbody>
            {urunler.map((urun)=>(
                    <tr>

                        <td><NavLink href={urun} >{urun}</NavLink></td>
                        
                    </tr>
                    
                    
                    
                ))}
          
        </tbody>
      </Table>
        
        
       
    );
}

export default Content;
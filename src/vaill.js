import React from 'react';
import { connect } from "react-redux";

const API_KEY = "e5b2fb2c9f34dfb26c5c64d67fe584ac";
var url = 'http://api.openweathermap.org/geo/1.0/direct?q=HaNoi,VN&limit=5&appid='+API_KEY;

console.log(url);

// fetch(url)
//     .then(
//         function(response){
//             if(response.status !== 200){
//                 console.log('Lỗi' + response.status);
//                 return;
//             }
//             response.json().then(data => {
//                 console.log(data);
//                 return data;
//             })
//         }
//     )
//     .catch(err => {
//         console.log('Error :-S', err)
//       });
    
//     const dataa = data;
//     console.log(dataa)

function Vaill(props){

    return(
        <div className='vai'>
            <h4>{props.state}</h4>

        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{

    }
}
const mapStateToProps = (state) =>{
    return{
        state:state.setColor_redux
    }
   
}
export default connect(mapStateToProps,mapDispatchToProps)(Vaill);
//cleans up react compontents that are created when infowindows are loaded in
import ReactDOM from 'react-dom'
const cleanup = (array) =>{
    for(const div of array){
        ReactDOM.unmountComponentAtNode(div)
    }
}

export default cleanup
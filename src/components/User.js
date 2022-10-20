import React from "react";
import {useState} from "react";

class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: false
        };

        this.changeVisible = this.changeVisible.bind(this)
    }

    // changeVisible = () => {
    //     this.setState((prevState) => {
    //             return {
    //               isVisible: !prevState.isVisible
    //             }
    //         }
    //     )
    // }

    changeVisible() {
        this.setState((prevState) => {
                return {
                  isVisible: !prevState.isVisible
                }
            }
        )
    }

    render() {
        return (
            <div>
                {!this.state.isVisible && <h1> Here the user Name shown</h1>}
                <div>
                    <button onClick={this.changeVisible}>change visible</button>
                </div>
            </div>
        );
    }
}

export default User;

// export const User1 = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [value, setValue] = useState("Bob");
//
//   const changeName =()=>{
//     setValue('Olga')
//   }
//
//   const handleVisible=()=>{
//     setIsVisible(!isVisible)
//   }
//
//   return (
//     <div>
//         {isVisible && <h1> Here the user Name shown :{value}</h1>}
//       <div>
//         <button onClick={changeName}>change name</button>
//         <button onClick={handleVisible}>Show  name</button>
//       </div>
//     </div>
//   );
// };

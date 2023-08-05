import { useState } from "react";
import Search from "./Search";

const Home = () => {
    const [contacts, setContacts] = useState([
        {
            id: 1,
            name: "Mma Obiora",
            number: "08131972658"
        },
        {
            id: 2,
            name: "Helen Obiora",
            number: "08131972658"
        },
        {
            id: 3,
            name: "Mason Obiora",
            number: "08037125987"
        }
    ])

    return ( 
        <div>
            <Search contacts={contacts} />
        </div>
     );
}
 
export default Home;






'use client'
import {useEffect, useState} from "react";

async function fetchData(user) {
    const response = await fetch(`/api/getNeiDebtors/${user._id}`)
    const result = await response.json();
    console.log(result);
}
function DebtsPage(props) {
    const [user, setUser] = useState(null);
    const [debtors, setDebtors] = useState([]);
    useEffect(() => {
        setUser(prevState => prevState = JSON.parse(localStorage.getItem('user')));
            fetchData(user);
    }, []);

    return (
        <div>Хуйня</div>
    );
}

export default DebtsPage;
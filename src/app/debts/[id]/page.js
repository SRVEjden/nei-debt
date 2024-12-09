'use client'
import {useEffect, use, useState} from "react";
import DebtorList from "@/components/DebtorList";

async function fetchData(id) {
    const response = await fetch(`/api/neiDebt/getNeiDebtors/${id}`)
    const result = await response.json();
    console.log(result);
    return result
}

function PersonDebts({params}) {
    const [debtors, setDebtors] = useState([]);
    useEffect(() => {
        fetchData(params.id).then((data) => setDebtors(data))
    })
    console.log(`gay: `, debtors);
    return (
        <DebtorList debtors={debtors}/>
    );
}

export default PersonDebts;
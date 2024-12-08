import DebtorCard from "@/components/DebtorCard";

function DebtorList({ debtors }) {
    return (
        <div className="debtor-list grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {debtors.map((debtor) => (
                <DebtorCard debtor={debtor} key={debtor._id} />
            ))}
        </div>
    );
}

export default DebtorList;
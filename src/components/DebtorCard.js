import Image from "next/image";
import {STANDART_IMAGE_URL} from "@/globalVars";
function DebtorCard({debtor}) {
    return (
        <div id={debtor._id} className="debtor-card flex flex-row gap-4 p-2.5 bg-accent max-w-xs rounded-md text-accent box-border">
            <Image src={debtor.avatar ? debtor.avatar : STANDART_IMAGE_URL} width={50} height={50} alt={"Piggy"} className={"object-cover rounded-full shadow-lg"}></Image>
            <div className="flex flex-col gap-1.5 w-full min-w-0">

                <label className="input input-bordered flex items-center gap-2 rounded-md input-sm w-full max-w-xs bg-accent-content text-center text-accent">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input type="text" className="grow" placeholder="Debtor name" defaultValue={`${debtor.firstName} ${debtor.secondName}`} readOnly />
                </label>
                <label className="input input-bordered flex items-center gap-2 rounded-md input-sm max-w-xs bg-accent-content text-center text-accent">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -8 72 72"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M50.17,28.91a20.68,20.68,0,0,0-7.51-3.19L40,25.15v-11a.33.33,0,0,0,.23.12.1.1,0,0,1,.11.11,6,6,0,0,1,3.53,5.47h8.77c-.16-4.56-1.86-8-5.13-10.48A17.65,17.65,0,0,0,40,6.15V0H32V5.92a15.94,15.94,0,0,0-9,3.64,12.55,12.55,0,0,0-4.33,9.79q0,6.38,4.44,9.45C24.67,29.93,27.63,31,32,32V43.82a7.21,7.21,0,0,1-3.64-2.16,8.05,8.05,0,0,1-1.71-4.33H18a12.77,12.77,0,0,0,4.89,10.59A19,19,0,0,0,32,51.45V56H40V51.56a18.06,18.06,0,0,0,9.45-3.76,12.74,12.74,0,0,0,4.55-10Q54,32,50.17,28.91ZM32,23.22a14.32,14.32,0,0,1-2.73-1,3.76,3.76,0,0,1-2.17-3.53,4.44,4.44,0,0,1,2.17-4A11.93,11.93,0,0,1,32,13.54Zm9.45,20.37a5.81,5.81,0,0,1-1.37.35V33.8a16.67,16.67,0,0,1,3.3,1.37,3.89,3.89,0,0,1,1.94,3.42Q45.28,42.22,41.41,43.59Z"
                            clipRule="evenodd" />
                    </svg>
                    <input type="text" className="grow" placeholder="Sum of Debt" defaultValue={debtor.sumOfDebt} readOnly />
                </label>
            </div>
        </div>
    );
}

export default DebtorCard;
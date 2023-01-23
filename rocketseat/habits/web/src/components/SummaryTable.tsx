import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning";
import { HabitDay } from "./HabitDay";
import { LettersDay } from "./LettersDay";

const summaryDates = generateDatesFromYearBeginning();

const minimumSummaryDatesSize = 18 * 7;
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length;

export function SummaryTable(){
    return(
        <div className="w-full flex">
            <div className="grid grid-rows-7 grid-flow-row gap-3">
                <LettersDay titulo="D"/>
                <LettersDay titulo="S"/>
                <LettersDay titulo="T"/>
                <LettersDay titulo="Q"/>
                <LettersDay titulo="Q"/>
                <LettersDay titulo="S"/>
                <LettersDay titulo="S"/>
            </div>

            <div className="grid grid-rows-7 grid-flow-col gap-3">
                {summaryDates.map(date => {
                    return (
                        <HabitDay 
                            key={date.toString()}
                            amount={5}
                            completed={Math.round(Math.random() * 5)} 
                        />
                    )
                })}
                {amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill }).map((_, i) => {
                    return (
                        <div 
                            key={i} 
                            className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
                        />
                    )
                })}
            </div>
        </div>
    )
}
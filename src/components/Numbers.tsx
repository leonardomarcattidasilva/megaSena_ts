import {useAppSelector} from '../store/hook';
import React from "react";

const Numbers = () => {
   const sortedNumbers = useAppSelector(state => state.numbers.value)
   const string = sortedNumbers.toString()
   const preparedString = string.replaceAll(',', ' - ')
   return <div>
         <h2>{preparedString}</h2>
      </div>
}

export default Numbers
"use client"

import { useCallback, useState, useEffect } from "react"

export function useLocalStorage(key: string, defaultValue: any) {
    return useStorage(key, defaultValue, typeof window !== "undefined" ? window.localStorage : null)
}
export function useSessionStorage(key: string, defaultValue: any) {
    return useStorage(key, defaultValue, typeof window !== "undefined" ? window.sessionStorage : null)
}
function useStorage(key: string, defaultValue: any, storageObject: Storage | null) {
    // const [value, setValue] = useState(() => {
    //     const jsonValue = storageObject.getItem(key)
    //     if (jsonValue != null) return JSON.parse(jsonValue)
    //     if (typeof defaultValue === "function") {
    //         return defaultValue()
    //     } else {
    //         return defaultValue
    //     }
    // })
    // useEffect(() => {
    //     if (value === undefined) return storageObject.removeItem(key)
    //     storageObject.setItem(key, JSON.stringify(value))
    // }, [key, value, storageObject])
    // const remove = useCallback(() => {
    //     setValue(undefined)
    // }, [])
    // return [value, setValue, remove]

    let value = undefined
    const jsonValue = storageObject && storageObject.getItem(key)
    if (jsonValue != null) { 
        value = JSON.parse(jsonValue)
    } else {
        if (typeof defaultValue === "function") {
        value = defaultValue()
        } else {
            value = defaultValue
        }
    }
    
    const setValue = (val: any)=>{
        if (val === undefined) {storageObject && storageObject.removeItem(key)}
        else { storageObject && storageObject.setItem(key, JSON.stringify(val)) }
    }

    const remove = ()=>setValue(undefined)

    return [value, setValue, remove]

}

// import { useSessionStorage, useLocalStorage } from "./useStorage"

// export default function StorageComponent() {
//     const [name, setName, removeName] = useSessionStorage("name", "Sergey")
//     const [age, setAge, removeAge] = useLocalStorage("age", 26)
//     return (
//         <div>
//             <div>
//                 {name} - {age}
//             </div>
//             <button onClick={() => setName("John")}>Set Name</button>
//             <button onClick={() => setAge(40)}>Set Age</button>
//             <button onClick={removeName}>Remove Name</button>
//             <button onClick={removeAge}>Remove Age</button>
//         </div>
//     )
// }
import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {

        const [notes, setNotes] = useState([]);
        const [reminders, setReminders] = useState([]);
        const [editLabels, setEditLabels] = useState([]);
        const [archiveNotes, setArchiveNotes] = useState([]);
        const [trash, setTrash] = useState([]);
       

    return (
        <DataContext.Provider value = {{
            notes, 
            setNotes,
            reminders, 
            setReminders,
            editLabels, 
            setEditLabels,
            archiveNotes, 
            setArchiveNotes,
            trash, 
            setTrash
        }}> 
        {children}
        </DataContext.Provider>
    )

}

export default DataProvider;
import {MdEventNote, MdLightbulb, MdLocationPin} from "react-icons/md";

export const noteIcon = (category) => {
    switch (category) {
        case 'Task':
            return <i className="category-icon"><MdEventNote/></i>
        case 'Random Thought':
            return <i className="category-icon"><MdLocationPin/></i>
        case "Idea":
            return <i className="category-icon"><MdLightbulb/></i>
        default:
            return null
    }
}
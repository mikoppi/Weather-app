//import { handleSubmit } from "./requestInfo";
import { weatherModule } from "./requestInfo";
import { display } from "./presentData";

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();
    const nameData = new FormData(event.target);
    const value = nameData.get('search');
    let dataToDisplay= await weatherModule.makeRequest(value)
    display.presentData(dataToDisplay)

}

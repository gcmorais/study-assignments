import delay from "../utils/delay";

class ContactServices{
  async listContacts(orderBy = 'asc'){
    const response = await fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`);

    await delay(500);

    return response.json();
  };
}

export default new ContactServices();

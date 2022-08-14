import { Roster } from "./classes";

//const baseUrl = "http://localhost:4141";
const baseUrl = "https://gwc29trnj4.execute-api.us-east-2.amazonaws.com/WoWRosterService/";
const getRosterEndpoint = 'roster/:id';
const putRosterEndpoint = 'roster';

export const getRoster = async (rosterId: string): Promise<Roster | boolean> => {
    const endpoint = getRosterEndpoint.replace(":id", rosterId)
    const apiPath = baseUrl + endpoint;
    console.log(apiPath)
    try {
        const response = await fetch(apiPath);
        if (!response.ok)
            return false;
        const rosterData = await response.json();
        return rosterData as Roster;
    } catch (e) {
        console.log(e);
        return false;
    }
}

export const postRoster = async (roster: Roster): Promise<boolean> => {
    const apiPath = baseUrl + putRosterEndpoint;
    // Example POST method implementation:
    // Default options are marked with *
    const response = await fetch(apiPath, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(roster) // body data type must match "Content-Type" header
    });
    return response.ok;
}

const baseUrl = "http://localhost:4141";
const getRosterEndpoint = '/roster/:id';

export const getRoster = async (rosterId: string) => {
    const endpoint = getRosterEndpoint.replace(":id", rosterId)
    const apiPath = baseUrl + endpoint;
    const response = await fetch(apiPath);
    if (!response.ok)
        return;
    const rosterData = await response.json();
    console.log(rosterData);
}

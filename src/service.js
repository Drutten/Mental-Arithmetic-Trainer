export class Service {

    getTasks = async (url = './data/add.json') => {
        let result = await fetch(url, {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
        });
        return await result.json();
    }
}
// IMPORT DATA FROM STATIC JSON FILE

import zips from './zips.json';
import axios from 'axios'

// COMPONENT

const simulateError = false;

export const fetchZipCodes = () => {
    fetchDirectDriverList()
    return new Promise((resolve, reject) => {
        // simulate lengthy service call
        setTimeout(() => {
            if (simulateError) {
                reject('Failed to fetch list of zip codes');
            } else {
                resolve(zips);
            }
        }, 1000);
    });
};

const requestConfig = {
    headers: {
        // Authorization: `Token token="${API_KEY}"`
    }
};

export const fetchDirectDriverList = () => {
    // const url = `${API_BASE_URL}/quotes/?filter=${filter}`;

    return new Promise((resolve, reject) => {

        // simulate lengthy service call
        setTimeout(() => {
            axios
                .get(url, requestConfig)
                .then(response => {
                        console.log(response);
                        return resolve(response.data);
                    }
                )
                .catch(error => {
                    console.log(error)
                    return reject(error);
                });
        }, 1000)
    });
};


const BASE_URL = 'http://localhost:9111'

export const signupUser = async (userdata) => {

    const responseData = await fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userdata)
    })
    .then(respoData => respoData.json())
    .catch(e => console.log(e));

    return responseData ? true : false;

    // {fullName: 'deepak', email: 'd@g', password: 'd', confirmPassword: 'd'}

}


export const loginUser = async (email) => {

    // console.log(`login for email : ${email}`);

    const responseData = await fetch(`${BASE_URL}/login/${email}`)
    .then(respoData => respoData.json())
    .then(data =>{ 
        // console.log(data)
        if (!data) {
            console.log('data not dispatched');
        }
        return data
    })
    .catch(e => console.log(e));

    console.log(responseData);

    return responseData
}
import axios from 'axios';

export const ListaUsuarios = async (page) => {
    try{
        const response  = await axios({
            url: `https://reqres.in/api/users?page=${page}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        return response;
    } catch(e){
        console.log(e);
    }
};
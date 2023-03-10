import httpRequest from "./comman"



const getData = async (payload) => {
    try{
        let res = await httpRequest({
            method:"GET",
            url:"https://api.coincap.io/v2/assets",
            
            data:payload
        });

        let { data} = res.data;

        return {
            data:data,
            // message:meta.Message,
        }

    } catch (error) {
        return error.Message;
    }
};



export default getData

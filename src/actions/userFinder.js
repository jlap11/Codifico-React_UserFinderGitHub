import  api  from "./api";

export const ACTION_TYPES = {
    CONSULTAR: 'Consultar'
}
const formateData = data => ({
    ...data
    
})

export const consultar = (userName, data) => dispatch => {
    api.user().consultar(userName, data)
        .then(
            response => {
                dispatch(
                    {
                        type: ACTION_TYPES.CONSULTAR,
                        payload:{ userName, response}
                    }
                )
            }
        )
        .catch(err => console.log(err))
}
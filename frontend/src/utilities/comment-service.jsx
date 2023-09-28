
export async function create(data){
    try {
        console.log(process.env.REACT_APP_BASE_URL)
        const res = await fetch(`http://localhost:4000/api/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        if (res.ok) {
            return res.json()
        }
    } catch (err) {
        throw new Error('Invalid Request')
    }
}


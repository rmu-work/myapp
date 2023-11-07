export function generatePayload(payload) {
    const filteredPayload = new FormData();
    const fields = Object.keys(payload);
    for (let field in fields) {
        const dbField = fields[field];
        filteredPayload.append(dbField, payload[dbField].value)
    }
    return filteredPayload;
}

export function initiateForm(action, payload, initialData=null) {
    if (action === 'CREATE') {
        return payload
    } else {
        console.log('initialData : ', initialData);
        const fields = Object.keys(payload);
        const keys = ['id', ...fields]
        for (let i in keys) {
            const field = keys[i];
            if (field === 'id') {
                payload['id'] = {
                    value: initialData[field]
                }
            } else {
                payload[field]['value'] = initialData[field]
            }
        }
        console.log('payload : ', payload);
        return payload;
    }
}
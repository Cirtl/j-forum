import { ElMessage } from 'element-plus'

const errorMessage = (err) => {
    ElMessage({
        message: err,
        type: 'error'
    })
}

const successMessage = (success) => {
    ElMessage({
        message: success,
        type: 'success'
    })
}

const warnMessage = (warn) => {
    ElMessage({
        message: warn,
        type: 'warning'
    })
}

const infoMessage = (info) => {
    ElMessage({
        message: info,
        type: 'info'
    })
}

export {
    errorMessage,
    successMessage,
    warnMessage,
    infoMessage
}
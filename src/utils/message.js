import { ElMessage } from 'element-plus'

const errorMessage = (err) => {
    ElMessage({
        message: err,
        type: 'error'
    })
}

const successMessage = (success) => {
    console.log(success)
    ElMessage({
        message: success,
        type: 'success'
    })
}

export {
    errorMessage,
    successMessage,
}
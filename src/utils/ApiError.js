class apiError extends Error{
    constructor(
        statuscode,
        message= "Something went wrong",
        error = [],
        statck = ""
    ){
        super(message)
        this.statuscode = statuscode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors
        if (stack){
            this.stack = statck
        } else{
            Error.captureStackTrace(this, this.constructotr)
        }
    }
}
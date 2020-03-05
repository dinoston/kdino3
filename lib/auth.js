module.exports = {
    IsOwner: function (request, response){
        if(request.user){
             return true;
        } else {
            return false;
        }
    },
    StatusUI: function (request, response){
        var authStatusUI = `
        <a href="/auth/login">Login</a> | 
        <a href="/auth/register">Register</a> |
        <a href="/auth/google">Login with google</a>
        `
        if(this.IsOwner(request, response)){
            authStatusUI = `${request.user.displayName} | <a href="/auth/logout">logout</a>`;
        }
        return authStatusUI;
    }
}

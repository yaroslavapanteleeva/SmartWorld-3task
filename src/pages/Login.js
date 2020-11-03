import React from 'react'

const Login = (props) => {

    const { 
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError 
    } = props;
    

    return (
        <section className="login">
            <form className="form-container">
                <div className="form-group">
                    <label>Email address</label>
                    <input 
                        type="email"
                        autoFocus
                        required
                        className="form-control" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <small id="emailHelp" className="form-text text-muted text-red">{emailError}</small>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type="password"
                        required
                        className="form-control" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <small id="emailHelp" className="form-text text-muted text-red">{passwordError}</small>
                </div>
                <div className="form-group">
                    {hasAccount ? (
                        <div>
                           <button onClick={handleLogin} type="submit" className="btn btn-primary">Sign in</button>
                            <small id="emailHelp" className="form-text text-muted">Don`t have an account ? <span onClick={() => setHasAccount(!hasAccount)} className="mark-link">Sign up</span> </small> 
                        </div>  
                    ) : (
                        <div>
                           <button onClick={handleSignup} type="submit" className="btn btn-primary">Sign up</button>
                            <small id="emailHelp" className="form-text text-muted">Have an account ? <span onClick={() => setHasAccount(!hasAccount)} className="mark-link">Sign in</span> </small> 
                        </div>  
                    )}
                </div>
                
            </form>
        </section>
       
    )
}

export default Login;
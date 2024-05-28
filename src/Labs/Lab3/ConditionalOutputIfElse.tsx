
const ConditionalOutputIfElse = () => {
    const loggedIn = true;
    if (loggedIn) {
        return (<div><h2 id="wd-conditional-output-if-else-welcome">Welcome If Else</h2><hr /></div>);
    } else {
        return (<div><h2 id="wd-conditional-output-if-else-login">Please login If Else</h2><hr /></div>);
    }
    
    
};
export default ConditionalOutputIfElse;

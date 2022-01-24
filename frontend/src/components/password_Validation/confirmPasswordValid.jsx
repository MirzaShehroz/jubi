import React from 'react';
import PasswordChecklist from "react-password-checklist"

function ConfirmPasswordValid(props) {
    return (
        <div className='forget_field_21 forget_showPassVal2'>
            <PasswordChecklist
                rules={["match"]}
                iconSize={11}
                value={props.pass}
                valueAgain={props.cPass}
                messages={{
                    match: "Passwords matched ?"
                }}
            />
        </div>
    );
}

export default ConfirmPasswordValid;

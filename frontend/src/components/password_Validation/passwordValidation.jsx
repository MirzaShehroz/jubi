import React from 'react';
import PasswordChecklist from "react-password-checklist"

function PasswordValidation({ pass }) {
    return (
        <div className='forget_field_21 forget_showPassVal2'>
            <PasswordChecklist
                rules={["minLength", "capital", "number"]}
                minLength={8}
                iconSize={11}
                value={pass}
                messages={{
                    minLength: "At least 8 characters",
                    capital: "At least 1 uppercase character",
                    number: "At least 1 number of symbol"
                }}
            />
        </div>
    );
}

export default PasswordValidation;

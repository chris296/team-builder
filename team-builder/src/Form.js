import React, {useState} from "react";

const Form = props => {

    const [member, setMember] = useState({
        name: '',
        email: '',
        role: ''
    });

    const handleChanges = e => {
        setMember({
            ...member,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = e => {
        e.preventDefault();
        props.addNewTeamMember(member);
        setMember({ name: '', email: '', role: ''});
    };

    console.log(member);
    return (
    <div>
        <form onSubmit={submitForm}>
            <label htmlFor="title">
                Name:
                <input name='name' type="text" onChange={handleChanges} value={member.name}/>
            </label>
            <label htmlFor="title">
                Email:
                <input name='email' type="text" onChange={handleChanges} value={member.email}/>
            </label>
            <label htmlFor="title">
                Role:
                <input name='role' type="text" onChange={handleChanges} value={member.role}/>
            </label>
            <button type="submit">Add Member</button>
        </form>
    </div>
    );

};

export default Form;
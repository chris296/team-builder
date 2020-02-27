import React from 'react';

const MemberList = props => {
    return (
        <div>
            {props.team.map(t => (
                <div key={t.id}>
                    <p>{t.name}</p>
                    <p>{t.email}</p>
                    <p>{t.role}</p>
                </div>
            ))}
        </div>
    )
}

export default MemberList;
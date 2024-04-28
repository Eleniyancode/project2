import React from "react";

const Repos = ( {repos, loading} ) => {
if (loading) {
    return <h2> Loading... </h2>
}

    return (
       <ul className="">
        {repos.map(repos => (
            <li key={repos.id}> {repos.name} </li>
        ))}

       </ul>
    )

}

export default Repos
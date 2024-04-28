import React from "react";

const Pagination = ({reposPerPage, totalRepos, paginate}) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {

        pageNumbers.push(i)

    }
    return (
        <nav className="pagination">

            {pageNumbers.map(number => (
                <span key={number} className="page-item">
                    <a onClick={() => paginate(number)} href="!#" className="page-link">
                        {number}
                    </a>
                </span>
            ))}

        </nav>
    )

}

export default Pagination